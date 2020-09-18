class TestsController < ApplicationController
    def show 
        test = Test.find_by(name:(params[:id]))
        questions = test.questions
        render json: questions
      end
    

end
