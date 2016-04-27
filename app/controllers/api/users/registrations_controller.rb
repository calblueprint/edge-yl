class Api::Users::RegistrationsController < Devise::RegistrationsController

  respond_to :json

  def create
    user = User.new registration_params
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
