class Api::LeadershipsController < Api::BaseController

  def update
    leadership = leadership.includes(:user).find params[:id]
    if leadership.update_attributes leadership_params
      render json: leadership
                   serializer: LeadershipBaseSerializer,
                   status: 201
    end
  end

  private

  def leadership_params
    params.require(:leadership).permit(
      :letter
    )
  end

end
