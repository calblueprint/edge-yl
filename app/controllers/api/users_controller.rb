class Api::UsersController < Api::BaseController

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: @user, serializer: UserIndexSerializer, status: 201
    else
      error_response object: @user, status: 401
    end
  end

  private
    def user_params
      params.require(:user).permit(
        :first_name, 
        :last_name, 
        :email, 
        :password
        )
    end

end
