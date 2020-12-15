class WelcomeController < ActionController::Base 
  before_action :authorized, except: [:index]
  
  def index
  end
  
end
