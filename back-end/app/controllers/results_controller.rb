class ResultsController < ApplicationController
  before_action :authenticate
  def index 
      results = Result.all 
      render json: results 
  end


  def total 
   recentResults = get_dates(UserAnswer.all)
  stats = {
      test_average: get_avg,
      number_correct: get_correct(recentResults),
      number_incorrect: get_incorrect(recentResults),
      week_activity: get_week_summary,
      answer_stats: generate_incorrect_stats
  }
  # byebug
  render json: stats
  end

  def create 
  result = Result.create(result_params)
  render json: result
  end
  
  private 
  
  def get_week_summary 
    reviewed = {}
    # recentReviewed = get_dates(Cardtrack.all)  
    Cardtrack.all.each_with_index do |e, index|
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
# used to filter last 7 days 
def get_dates(arr) 
dayDifference = Date.today - 7.days
arr.all.select do |d|  
if d.created_at.to_date > dayDifference
  d 
 end
end   
end

# gets average for all tests/quizzes
def get_avg
  arr = get_dates(Result.all)
  totalScore = arr.reduce(0) {|curr,n| curr + n.score} 
  totalScore/arr.count 
 end

#    Gets the number of correct answers 
 def get_correct(arr) 
  arr.reduce(0)  do |curr,n|
  if n.is_right === true 
      curr+1
  else  
  curr 
  end
 end
end 

#   Get nnumber of incorrect responses 
def get_incorrect(arr) 
  arr.reduce(0) { |curr,n| n.is_right != true ? (curr+1) : curr }
end

# Gets my total of incorrect answers 
def get_incresults
allIncorrect = UserAnswer.all.select  do |ans|
  ans.is_right === false 
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


# def get_incorrect_answers(arr)
# wrong_ans = arr.to_a.map do |qid|
#   Answer.find(qid[0])
# end
# end

# def get_incorrect_qs(incorrect_ans_arr)
# findQs = incorrect_ans_arr.map do |qid|
# q = Question.find(qid.question_id).question
# q
# end
# end

# inc_answers_arr = get_incorrect_answers(stats_hash) 
# inc_ans_arr = get_incorrect_qs(inc_answers_arr)
def find_wrong_answers(id)
  wrong_answers = get_incresults
  arr = [] 
  wrong_answers.select do |v|
  if v.question_id === id && v.is_right === false 
    a = Answer.find(v.choice_id).answer
     arr << a  
  end
end
arr
end



def generate_incorrect_stats
wrong_answers = get_incresults
stats_hash = incorrect_hash(get_incresults)
arr = []
stats_hash.to_a.each_with_index do |qid,index|
  qStats = {}
qStats["question"]= Question.find(qid[0]).question
qStats["category"] = Question.find(qid[0]).test.name
qStats["inc_answers_chosen"] = find_wrong_answers(qid[0])
arr << qStats 
# qStats["#times_incorrect#{index}"]= qid[1],
end
arr 
end 
# ABOVE WE Have below info 
# createData("Question", "category", incorrectNumber)

end
