class RegistrationsController < Devise::RegistrationsController
  respond_to :json

  def create
    user = User.new user_params
    if user.save
      sign_in(user)
      render json: user, status: 201
    else
      error_response(user)
    end
  end

end
