class Api::Users::SessionsController < Devise::SessionsController

  respond_to :json

  def create
    user = User.find_by_email params[:user][:email]
    return invalid_login if user.nil?
    if user.valid_password? params[:user][:password]
      sign_in user
      render json: user, status: 201
    else
      invalid_login
    end
  end

  private

  def invalid_login
    error_response message: 'Incorrect email or password', status: 401
  end

end
