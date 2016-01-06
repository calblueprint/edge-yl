class Api::UsersController < Api::BaseController

  def groupables
    users = User.groupable
    render json: users, each_serializer: UserBaseSerializer
  end

  def index
    users = User.page params[:page]
    render json: users,
                 serializer: PaginatedSerializer,
                 each_serializer: UserIndexSerializer
  end

  def show
    user = User.includes(:responsibilities).find params[:id]
    current_user.create_visit('User', params[:id].to_i)
    render json: user, serializer: UserShowSerializer
  end

  def update
    user = User.includes(:responsibilities).find params[:id]
    if user.update_attributes user_params
      render json: user,
                   serializer: UserShowSerializer,
                   status: 201
    else
      unprocessable_response user
    end
  end

  private

  def user_params
    params.require(:user).permit(
      :email,
      :first_name,
      :has_sidebar,
      :last_name,
      :password
    )
  end

end
