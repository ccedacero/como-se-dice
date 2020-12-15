class PhrasesController < ApplicationController
  def index 
    phrases = Phrases.all
    render json: phrases
  end
end
