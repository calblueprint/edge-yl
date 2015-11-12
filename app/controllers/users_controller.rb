class UsersController < BaseController

  def index
    @users = User.all
  end

  def profile
    if user_signed_in?
      @current_user = current_user
    else
      redirect_to login_path
    end
  end

  def update
    @user = User.find(params[:id])
    if @user.update_attributes(user_params)
      render json: user, serializer: UserIndexSerializer, status: 201
    else
      error_response object: user, status: 401
    end
  end

  private
    def user_params
      params.require(:user).permit(
        :first_name, 
        :last_name, 
        :email, 
        :password, 
        :birthday)
    end

end
