class AlphabetsController < ApplicationController
  before_action :authenticate

  def index 
    @alphabet = Alphabet.all
    render json: @alphabet
  end
end

