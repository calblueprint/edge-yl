class Api::SchoolsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]

  def create
    school = School.new school_params
    if school.save
      SchoolMailer.welcome(school).deliver_now
      render json: school,
             serializer: SchoolBaseSerializer,
             status: :created
    else
      unprocessable_response school
    end
  end

  def index
    respond_to do |format|
      format.csv { index_csv }
      format.json { index_json }
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
             status: :created
    else
      unprocessable_response school
    end
  end

  private

  def index_csv
    schools = School.all
    send_data schools.to_csv
  end

  def index_json
    schools = School.page params[:page]
    render json: schools,
           serializer: PaginatedSerializer,
           each_serializer: SchoolIndexSerializer
  end

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
