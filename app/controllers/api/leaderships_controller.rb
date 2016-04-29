class Api::LeadershipsController < Api::BaseController

  def update
    leadership = Leadership.includes(:volunteer).find params[:id]
    if leadership.update_attributes leadership_params
      render json: leadership,
             serializer: LeadershipGroupSerializer,
             status: :created
    else
      unprocessable_response leadership
    end
  end

  private

  def leadership_params
    params.require(:leadership).permit(
      :volunteer_id,
    )
  end

end
