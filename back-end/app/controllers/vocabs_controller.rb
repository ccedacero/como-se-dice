class VocabsController < ApplicationController
  before_action :authorized

  def index 
        vocab = Vocab.all
        render json: vocab  
      end
    
end
