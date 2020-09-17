class TestsController < ApplicationController
    def show 
        # byebug
        test = Test.find_by(name:(params[:id]))
        questions = test.questions
        # byebug
        render json: questions
      end
    

end
