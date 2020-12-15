class VowelsController < ApplicationController
  def index 
    vowels = Vowel.all
    render json: vowels
  end
end

