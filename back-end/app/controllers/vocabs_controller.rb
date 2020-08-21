class VocabsController < ApplicationController
  # before :authenticate_user!
  def index 
        vocab = Vocab.all
        render json: vocab  
      end

    
  def show 
    vocab = filterVocab(params[:id])
    render json: vocab
  end 

  def create 
    # byebug
    vocab = Vocab.create(vocab_params)
    render json: vocab
  end

  def destroy 
    delete_term = Vocab.find(params[:id])
    delete_term.destroy()
    render json: delete_term
    end


   private 

   def vocab_params
   params.require(:vocab).permit(:word, :wordUrl, :wordSpanish, :category, :audio, :blobUrl)
   end

   def filterVocab(term)
    Vocab.all.select do |ent|
    ent.category === term 
    end
  end

end
