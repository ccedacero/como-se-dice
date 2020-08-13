class VowelsController < ApplicationController
  before_action :authorized
  
  def index 
        vowels = Vowel.all
        render json: vowels
      end
    
end
