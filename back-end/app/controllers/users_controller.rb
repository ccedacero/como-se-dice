class UsersController < ApplicationController
  before_action :authorized, only: [:autologin]
  # def index 
  #     users = User.all
  #     render json: users
  #     end
      # REGISTER
      def create
        @user = User.create(user_params)
        # byebug
        if @user.valid?
          token = encode_token({user_id: @user.id})
          render json: { user: UserSerializer.new(@user), token: token }, status: :created    
        else
          render json: {error: "Invalid username or password"}
        end
      end
   

  # LOGGING IN
  def login
    @user = User.find_by(email: params[:email])
    # byebug
    if @user && @user.authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: {user: UserSerializer.new(@user), token: token }
    else
      render json: {error: "Invalid username or password"}
    end
  end

  


  def autologin
    user = User.find_by(email: params[:email])
    # render json: @user
    # byebug
    if user 
      render json: user 
    else 
      render json: {message: "Not logged in, try again!"}, status:  :unauthorized
    end
  end

  private

  def user_params
    params.permit(:name,:email,:password)
  end

end