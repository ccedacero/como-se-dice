class AlphabetsController < ApplicationController
  def index 
    @alphabet = Alphabet.all
    render json: @alphabet
  end
end

