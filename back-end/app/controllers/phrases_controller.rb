class PhrasesController < ApplicationController
  # before_action :authorized
  
  def index 
        phrases = Phrases.all
        render json: phrases
      end
    
end
