class UserAnswersController < ApplicationController
    def index 
      answers = UserAnswer.all 
      render json: answers 
    end
    
    def create 
      answer = UserAnswer.create(answer_params)
      render json: answer 
    end
   
    private
    def answer_params
      params.require(:user_answer).permit(:user_id, :question_id, :choice_id, :is_right)
    end
end
