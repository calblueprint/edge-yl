class Api::Users::RegistrationsController < Devise::RegistrationsController

  respond_to :json

  def create
    # TODO(Warren): Don't skip confirmation in production.
    user = User.new registration_params
    user.skip_confirmation!
    if user.save
      sign_in user
      render json: user,
             serializer: UserBaseSerializer,
             status: :created
    else
      unprocessable_response user
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
