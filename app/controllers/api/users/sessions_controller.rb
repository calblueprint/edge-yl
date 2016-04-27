class Api::Users::SessionsController < Devise::SessionsController

  respond_to :json

  def create
    user = User.find_by_email params[:user][:email]
    return invalid_login if user.nil?
    return not_confirmed unless user.confirmed?
    if user.valid_password? params[:user][:password]
      sign_in user
      render json: user,
             serializer: UserBaseSerializer,
             status: :created
    else
      invalid_login
    end
  end

  private

  def invalid_login
    error_response message: 'Incorrect email or password', status: 401
  end

  def not_confirmed
    message = 'Please check your email for confirmation instructions.'
    error_response message: message, status: 401
  end

end
