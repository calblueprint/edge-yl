class Api::SchoolsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]

  def create
    school = School.new school_params
    if school.save
      SchoolMailer.welcome(school).deliver_now
      render json: school,
             serializer: SchoolBaseSerializer,
             status: 201
    else
      unprocessable_response school
    end
  end

  def index
    schools = School.page params[:page]
    respond_to do |format|
      format.csv { send_data schools.to_csv }
      format.json { render json: schools,
                           serializer: PaginatedSerializer,
                           each_serializer: SchoolIndexSerializer }
    end
  end

  def show
    school = School.find params[:id]
    current_user.create_visit('School', params[:id].to_i)
    render json: school, serializer: SchoolShowSerializer
  end

  def update
    school = School.find params[:id]
    if school.update_attributes school_params
      render json: school,
             serializer: SchoolShowSerializer,
             status: 201
    else
      unprocessable_response school
    end
  end

  private

  def school_params
    params.require(:school).permit(
      :address_city,
      :address_one,
      :address_state,
      :address_two,
      :address_zip,
      :contact_email,
      :contact_first_name,
      :contact_last_name,
      :contact_phone_number,
      :contact_title,
      :name,
      :website,
    )
  end

end
