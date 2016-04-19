class Api::Users::PasswordsController < Api::BaseController

  respond_to :json

  def update
    unless current_user.valid_password?(update_params[:current_password])
      error_response(message: 'Incorrect Password!', status: 400)
      return
    end

    if current_user.update(update_params.except!(:current_password))
      sign_in current_user, :bypass => true
      render json: current_user,
             serializer: ProfileBaseSerializer,
             status: :created
    else
      unprocessable_response current_user
    end
  end

  private

  def update_params
    params.require(:password).permit(
      :current_password,
      :password,
      :password_confirmation,
    )
  end

end
