class AnswersController < ApplicationController
    before_action :authorized

    def index 
        answer = Answer.all 
        render json: answer 
    end


end
