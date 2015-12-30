class Api::LeadershipsController < Api::BaseController

  def update
    leadership = Leadership.includes(:user).find params[:id]
    if leadership.update_attributes leadership_params
      render json: leadership,
                   serializer: LeadershipGroupSerializer,
                   status: 201
    else
      unprocessable_response leadership
    end
  end

  private

  def leadership_params
    params.require(:leadership).permit(
      :user_id,
    )
  end

end
