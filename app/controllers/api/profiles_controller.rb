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
      :email,
      :first_name,
      :has_sidebar,
      :last_name,
    )
  end

end

