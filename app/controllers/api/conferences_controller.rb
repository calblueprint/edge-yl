class Api::ConferencesController < Api::BaseController

  def create
    conference = Conference.new conference_params
    if conference.save
      render json: conference,
                   serializer: ConferenceBaseSerializer,
                   status: 201
    else
      unprocessable_response conference
    end
  end

  def index
    conferences = Conference.page params[:page]
    render json: conferences,
                 serializer: PaginatedSerializer,
                 each_serializer: ConferenceIndexSerializer
  end

  def show
    conference = Conference.find params[:id]
    render json: conference, serializer: ConferenceShowSerializer
  end

  def update
    conference = Conference.find params[:id]
    if conference.update_attributes conference_params
      render json: conference,
             serializer: ConferenceShowSerializer,
             status: 201
    else
      unprocessable_response conference
    end
  end

  private

  def conference_params
    params.require(:conference).permit(
      :id,
      :end_date,
      :location,
      :name,
      :start_date,
    )
  end

end
