class UsersController < ApplicationController
  skip_before_action :authenticate, only: [:create, :login]
  def create
    user = User.create(
      username: params[:username],
      password: params[:password],
      email: params[:email],
      # avatar: params[:avatar],
    )

    if user.valid?
      token = encode_token({ user_id: user.id })

      render json: { user: UserSerializer.new(user), token: token }, status: :created
      confirm_user(user.username)
    else
      render json: { error: user.errors.full_messages }, status: :bad_request
    end
  end
  

  def login
    user = User.find_by(username: params[:username])
    if user && user.authenticate(params[:password])
      token = encode_token({ user_id: user.id })
    # byebug

      render json: { user: UserSerializer.new(user), token: token }
      
      # render json: user # implicitly run serializer
      confirm_user()
    else
      render json: { error: "Invalid username or password" }, status: :unauthorized
    end
  end

  # before_action :authenticate
  def autologin
    render json: @current_user
  end

  # before_action :authenticate
  def profile
    # find that use in the database (happens in the authenticate before_action)
    @current_user.update(bio: params[:bio], avatar: params[:avatar])

    render json: @current_user
  end
# sends twilio sms to user to confirm user registration
  def confirm_user(newUser) 
    account_sid = 'account_sid goes here'
    auth_token = 'auth_token goes here'
    client = Twilio::REST::Client.new(account_sid, auth_token)
    
    from = '+13345083478' # Your Twilio number
    to = '+my_cellphone' # Your mobile phone number
    client.messages.create(
    from: from,
    to: to,
    body: "Congratulations #{newUser}! You've succesfully registered to Como Se Dice. Happy Learning!"
    )
  end
end 
