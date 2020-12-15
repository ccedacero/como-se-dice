class CardtracksController < ApplicationController
    
  def create 
    card = Cardtrack.create(card_params)
    render json: card 
  end

  private 
  def card_params
    params.require(:cardtrack).permit(:user_id,:vocab_id, :reviewed)
    end
  end


