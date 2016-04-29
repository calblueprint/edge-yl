class Api::VolunteersController < Api::BaseController

  has_scope :conference_id, only: [:index]

  def create
    volunteer = Volunteer.new volunteer_params
    if volunteer.save
      render json: volunteer,
             serializer: VolunteerIndexSerializer,
             status: :created
    else
      unprocessable_response volunteer
    end
  end

  def groupables
    volunteers = Volunteer.groupable
    render json: volunteers, each_serializer: VolunteerBaseSerializer
  end

  def index
    volunteers = apply_scopes(Volunteer).all.page params[:page]
    render json: volunteers,
           serializer: PaginatedSerializer,
           each_serializer: VolunteerIndexSerializer
  end

  def show
    volunteer = Volunteer.find params[:id]
    current_user.create_visit('Volunteer', params[:id].to_i)
    render json: volunteer, serializer: VolunteerShowSerializer
  end

  def update
    volunteer = Volunteer.find params[:id]
    if volunteer.update_attributes volunteer_params
      render json: volunteer,
             serializer: VolunteerShowSerializer,
             status: :created
    else
      unprocessable_response volunteer
    end
  end

  private

  def volunteer_params
    params.require(:volunteer).permit(
      :conference_id,
      :email,
      :first_name,
      :last_name,
    )
  end

end
