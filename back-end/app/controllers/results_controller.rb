class ResultsController < ApplicationController
  
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
        week_activity: get_week_summary
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

  def all_incorrect
  allIncorrect = UserAnswer.all.select  do |ans|
    if ans.is_right === false 
      ans 
    end
  end
end

def top_incorrect(arr) 
 incorrectStats = {}
 arr.each do |q|
  if 'Q'+incorrectStats[q.question_id]
    incorrectStats[q.question_id] = incorrectStats[q.question_id] + 1
  else 
    incorrectStats[q.question_id] = 1
  end
  end
  findQs = incorrectStats.to_a.map do |qid|
  Question.find(qid[0])
  end
  qStats1 = []

  incorrectStats.to_a.each_with_index do |qid,index|
  qStats1 << [findQs[index].question,findQs[index].category, qid[1]]
    end
 
end 
ABOVE WE Have below info 
# createData("Question", "category", incorrectNumber)

end
