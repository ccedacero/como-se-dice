class ResultsController < ApplicationController
  
    def create 
        byebug 
    # result = Result.create(no_incorrect: 
    end


    private 
   def result_params 
   params.require(:results)
   end

end
# .bigint "test_id", null: false
#     t.bigint "user_id", null: false
#     t.integer "no_correct"
#     t.integer "no_incorrect"
#     t.integer "no_unanswered"
#     t.integer "score"
#     t.integer "rank"