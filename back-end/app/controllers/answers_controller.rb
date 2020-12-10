class AnswersController < ApplicationController


    def index 
        answer = Answer.all 
        render json: answer 
    end


end
