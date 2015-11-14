class Api::UsersController < Api::BaseController

  def update
    user = User.find params[:id]
    if user.update_attributes user_params
      render json: user, serializer: UserIndexSerializer, status: 201
    else
      unprocessable_response: user
    end
  end

  private
    def user_params
      params.require(:user).permit(
        :email,
        :first_name,
        :last_name,
        :password
      )
    end

end
