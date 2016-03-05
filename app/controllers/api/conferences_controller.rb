class Api::ConferencesController < Api::BaseController

  def assign_students_to_groups
    conference = Conference.find(params[:conference_id])
                           .assign_students_to_groups
    render json: conference,
           serializer: ConferenceShowSerializer,
           status: :created
  end

  def assign_students_to_rooms
    begin
      conference = Conference.find(params[:conference_id])
                             .assign_students_to_rooms
    rescue
      error_response message: 'Not enough room space in conference', status: 422
      return
    end
    render json: conference,
           serializer: ConferenceShowSerializer,
           status: :created
  end

  def create
    conference = Conference.new conference_params
    if conference.save
      render json: conference,
             serializer: ConferenceIndexSerializer,
             status: :created
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
    conference = Conference.includes(:groups).find params[:id]
    render json: conference, serializer: ConferenceShowSerializer
  end

  def update
    conference = Conference.includes(:groups).find params[:id]
    if conference.update_attributes conference_params
      render json: conference,
             serializer: ConferenceShowSerializer,
             status: :created
    else
      unprocessable_response conference
    end
  end

  private

  def conference_params
    params.require(:conference).permit(
      :end_date,
      :location,
      :name,
      :start_date,
    )
  end

end
