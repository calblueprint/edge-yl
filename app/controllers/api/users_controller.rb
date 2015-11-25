class Api::UsersController < Api::BaseController

  def index
    users = User.page params[:page]
    render json: users,
                 serializer: PaginatedSerializer,
                 each_serializer: UserIndexSerializer
  end

  def me
    if user_signed_in?
      render json: current_user, serializer: UserBaseSerializer
    else
      unauthorized_reponse
    end
  end

  def update
    user = User.find params[:id]
    if user.update_attributes user_params
      render json: user, serializer: UserIndexSerializer, status: 201
    else
      unprocessable_response user
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
