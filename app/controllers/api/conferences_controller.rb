class Api::ConferencesController < Api::BaseController

  def create
    conference = Conference.new conference_params
    if conference.save
      render json: conference, serializer: GroupBaseSerializer
    end
  end

  def index
    render json: Conference.all, each_serializer: GroupIndexSerializer
  end

  def show
    conference = Conference.find params[:id]
    render json: conference, serializer: ConferenceShowSerializer
  end

  private

  def conference_params
    params.require(:conference).permit(
      :id,
      :end_date,
      :location,
      :start_date,
    )
  end

end
