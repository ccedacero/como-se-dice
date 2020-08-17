class ResultsController < ApplicationController
  
    def index 
        results = Result.all 
        render json: results 
    end

    def create 
        byebug
    result = Result.create(result_params)
    render json: result
    end


   private 
   def result_params 
   params.require(:results).permiet(:test_id, :user_id,:no_correct,:no_incorrect,:score)
   end
end