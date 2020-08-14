class VocabsController < ApplicationController
  
  def index 
        vocab = Vocab.all
        render json: vocab  
      end
    
  def show 
    vocab = filterVocab(params[:id])
    render json: vocab
  end

   private 
   def filterVocab(term)
    Vocab.all.select do |ent|
    ent.category === term 
    end
  end

end
