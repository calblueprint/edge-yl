class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    user = User.new registration_params
    # TODO(Warren): Don't skip confirmation in production.
    user.skip_confirmation!
    if user.save
      sign_in user
      render json: user, status: 201
    else
      error_response object: user, status: 401
    end
  end

  private

  def registration_params
    params.require(:registration).permit(
      :email,
      :birthday,
      :first_name,
      :last_name,
      :password,
      :password_confirmation,
    )
  end

end
