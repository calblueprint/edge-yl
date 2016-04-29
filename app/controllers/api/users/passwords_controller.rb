class Api::Users::PasswordsController < Api::BaseController

  skip_before_action :authenticate_user, only: [:request_reset, :reset]

  respond_to :json

  def request_reset
    email = request_reset_params[:email]
    user = User.where(email: email).first
    if user.nil?
      error_response(message: 'Email not found', status: 400)
      return
    elsif user.send_reset_password_instructions
      render json: { message: 'Password email sent' },
             status: :created
      return
    end
    error_response(message: 'An unknown error occurred', status: 500)
  end

  def reset
    resource = User.reset_password_by_token reset_params
    unless resource.id.nil?
      render json: { message: 'Password reset' },
             status: :created
      return
    end
    error_response(message: 'An unknown error occurred', status: 500)
  end

  def update
    unless current_user.valid_password?(update_params[:current_password])
      error_response(message: 'Incorrect password!', status: 400)
      return
    end

    unless update_params[:password] && update_params[:password_confirmation]
      error_response(message: 'New password cannot be blank!', status: 400)
      return
    end

    if current_user.update(update_params.except!(:current_password))
      sign_in current_user, bypass: true
      render json: current_user,
             serializer: ProfileBaseSerializer,
             status: :created
    else
      unprocessable_response current_user
    end
  end

  private

  def request_reset_params
    params.permit(:email)
  end

  def reset_params
    params.permit(:password, :password_confirmation, :reset_password_token)
  end

  def update_params
    params.require(:password).permit(
      :current_password,
      :password,
      :password_confirmation,
    )
  end

end
