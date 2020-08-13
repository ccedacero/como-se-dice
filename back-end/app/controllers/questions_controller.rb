class QuestionsController < ApplicationController
    before_action :authorized
    def index
    questions = Question.all 
    render json: questions 
end

end
