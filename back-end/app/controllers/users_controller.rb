class UsersController < ApplicationController
  before_action :authorized, only: [:auto_login]
  # def index 
  #     users = User.all
  #     render json: users
  #     end
      # REGISTER
  def create
    @user = User.create(user_params)
    if @user.valid?
      token = encode_token({user_id: @user.id})
      render json: {user: @user.name, token: token}
    else
      render json: {error: "Invalid username or password"}
    end
  end

  # LOGGING IN
  def login
    @user = User.find_by(username: params[:username])

    if @user && @user.authenticate(params[:password])
      token = encode_token({user_id: @user.id})
      render json: {user: @user.name,id:@user.id, token: token}
    else
      render json: {error: "Invalid username or password"}
    end
  end


  def auto_login
    user = User.find_by(username: params[:email])
    # render json: @user
    if user 
      render json: user 
    else 
      render json: {message: "Not logged in, try again!"}, status:  :unauthorized
    end
  end

  private

  def user_params
    params.permit(:name,:email, :password)
  end

end