class VocabsController < ApplicationController
  
  def index 
        vocab = Vocab.all
        render json: vocab  
      end
    
end
