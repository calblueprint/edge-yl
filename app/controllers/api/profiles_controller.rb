class Api::ProfilesController < Api::BaseController

  def update
    profile = User.find params[:id]
    if profile.update_attributes profile_params
      render json: profile,
                   serializer: ProfileBaseSerializer,
                   status: :created
    else
      unprocessable_response profile
    end
  end

  private

  def profile_params
    params.require(:profile).permit(
      :has_sidebar,
    )
  end

end

