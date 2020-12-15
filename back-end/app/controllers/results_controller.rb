class ResultsController < ApplicationController
  before_action :authorized
  def index 
      results = Result.all 
      render json: results 
  end
  
  #method returns a summary of important user stats(quiz_avg, correct_ans
  #incorrect_ans, weekly_activity, quiz_aswer stats)
  def total
    recentResults = get_user_cards(UserAnswer.all)
    filteredDates = get_dates(recentResults)
    stats = {
      test_average: get_avg,
      number_correct: get_correct(recentResults),
      number_incorrect: get_incorrect(recentResults),
      week_activity: get_week_summary,
      answer_stats: generate_incorrect_stats(filteredDates)
  }
    render json: stats
  end

  def create 
    result = Result.create(result_params)
    render json: result
  end
  
  private 
  def get_week_summary 
  reviewed = {}
  recentReviewed = get_user_cards(Cardtrack.all)
  filteredDates = get_dates(recentReviewed)
  recentReviewed.each_with_index do |e, index|
    if reviewed[e.created_at.to_date] 
        reviewed[e.created_at.to_date] = reviewed[e.created_at.to_date]+ 1
    else 
        reviewed[e.created_at.to_date] = 1
    end
    end
    reviewed
    reviewed = reviewed.sort 
    reviewedHelper = reviewed.to_h 
    reviewedObj = {
      days: reviewedHelper.keys, 
      values: reviewedHelper.values 
    }
    reviewedObj
  end

 
 def result_params 
 params.require(:result).permit(:test_id, :user_id,:no_correct,:no_incorrect,:score)
 end

 #filter user
 def get_user_cards(arr)
  if arr.length == 0
    'No Activity yet'
    else 
      arr.select do |ans|
        ans.user_id == @user.id
      end
    end
  end

 # used to filter last 7 days 
def get_dates(arr) 
  dayDifference = Date.today - 7.days
  arr.select do |day|  
  if day.created_at.to_date > dayDifference 
    day 
   end
  end   
end

# gets average for all tests/quizzes
def get_avg
  recentReviewed = get_user_cards(Result.all)
  filteredDates = get_dates(recentReviewed)
  totalScore = filteredDates.reduce(0) {|curr,n| curr + n.score} 
  totalScore/filteredDates.count 
 end

#    Gets the number of correct answers 
def get_correct(arr) 
arr.reduce(0) do |curr,n|
  if n.is_right == true 
    curr+1
  else  
    curr 
  end
end
end 

#   Get number of incorrect responses 
def get_incorrect(arr)
arr.reduce(0) { |curr,n| n.is_right != true ? (curr+1) : curr }
end

# Gets my total of incorrect answers 
def get_incresults(arr)
  if(arr.length == 0)
    'no results available yet'
  else 
    allIncorrect = arr.select do |ans|
    ans.is_right == false 
  end
 end
end

# Gives me a hash with keys as the question ids and the values as the number of times 
# that questions was wrong 
def incorrect_hash(arr)
  incorrectStats = {}
  arr.each do |q|
  if incorrectStats[q.question_id]
    incorrectStats[q.question_id] = incorrectStats[q.question_id] + 1
  else 
    incorrectStats[q.question_id] = 1
  end
  end
  incorrectStats
end

def find_wrong_answers(id)
  wrong_answers = get_incresults(UserAnswer.all)
  arr = [] 
  wrong_answers.select do |v|
    if v.question_id == id && v.is_right == false 
    a = Answer.find(v.choice_id).answer
    arr << a  
    end
  end
  arr
end

# generates a hash with incorrect answer stats 
# createData("Question", "category", incorrectNumber)
def generate_incorrect_stats(arr)
  wrong_answers = get_incresults(arr)
  stats_hash = incorrect_hash(wrong_answers)
  arr = []
  stats_hash.to_a.each_with_index do |qid,index|
    qStats = {}
    qStats["question"]= Question.find(qid[0]).question
    qStats["category"] = Question.find(qid[0]).test.name
    qStats["inc_answers_chosen"] = find_wrong_answers(qid[0])
    arr << qStats 
  end
  arr 
  end 
end