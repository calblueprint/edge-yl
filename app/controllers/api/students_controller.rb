class Api::StudentsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]

  def create
    student = Student.new student_params
    if student.save
      render json: student,
             serializer: StudentBaseSerializer,
             status: :created
    else
      unprocessable_response student
    end
  end

  def index
    respond_to do |format|
      format.csv { index_csv }
      format.json { index_json }
    end
  end

  def show
    student = Student.includes(comments: :user).find params[:id]
    current_user.create_visit('Student', params[:id].to_i)
    render json: student, serializer: StudentShowSerializer
  end

  def update
    student = Student.includes(comments: :user).find params[:id]
    if student.update_attributes student_params
      render json: student,
             serializer: StudentShowSerializer,
             status: :created
    else
      unprocessable_response student
    end
  end

  private

  def index_csv
    students = Student.all
    send_data students.to_csv
  end

  def index_json
    students = Student.includes(:group, :school).page params[:page]
    if params[:gender]
      students = students.where gender: Student.genders[params[:gender].downcase]
    end
    if params[:is_flagged]
      students = students.where is_flagged: params[:is_flagged]
    end
    if params[:is_primary]
      students = students.where is_primary: params[:is_primary]
    end
    if params[:order]
      students = students.order params[:order]
    end
    render json: students,
           serializer: PaginatedSerializer,
           each_serializer: StudentIndexSerializer
  end

  def student_params
    params.require(:student).permit(
      :address_city,
      :address_one,
      :address_state,
      :address_two,
      :address_zip,
      :birthday,
      :cell_phone,
      :email,
      :first_name,
      :gender,
      :group_id,
      :guardian_email,
      :guardian_employer,
      :guardian_first_name,
      :guardian_job_title,
      :guardian_last_name,
      :guardian_phone_number,
      :guardian_phone_type,
      :guardian_relationship,
      :home_phone,
      :is_flagged,
      :is_primary,
      :last_name,
      :preferred_name,
      :shirt_size,
    )
  end

end
