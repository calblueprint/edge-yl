class Api::SchoolsController < Api::BaseController

  skip_before_filter :verify_authenticity_token

  def import
    file = params[:upload]
    csv = CSV.parse(file.open, headers: true)
    csv.each do |row|
      school = School.create(
       address_city: row[8],
       address_one: row[6],
       address_two: row[7],
       address_state: row[9],
       address_zip: row[10],
       name: row[1],
      )
      contact = Contact.create(
        email: row[11],
        first_name: row[2],
        is_primary: true,
        last_name: row[3],
        phone_number: row[12],
        school: school,
        title: row[4],
      )
    end
    redirect_to schools_path
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
      :name,
      :website,
    )
  end

end
