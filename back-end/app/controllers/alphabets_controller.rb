class AlphabetsController < ApplicationController
  before_action :authorized

  def index 
    @alphabet = Alphabet.all
    render json: @alphabet
  end
end

