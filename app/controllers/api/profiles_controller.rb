class Api::ProfilesController < Api::BaseController

  def show
    render json: current_user, serializer: ProfileBaseSerializer
  end

  def update
    profile = User.find params[:id]
    if profile.update_attributes profile_params
      render json: profile,
                   serializer: ProfileBaseSerializer,
                   status: 201
    end
  end

  private

  def profile_params
    params.require(:user).permit(
      :has_sidebar,
    )
  end

end

