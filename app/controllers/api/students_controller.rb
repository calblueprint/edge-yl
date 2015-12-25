class Api::StudentsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]

  def create
    student = Student.new student_params
    if student.save
      render json: student,
                   serializer: StudentBaseSerializer,
                   status: 201
    else
      unprocessable_response student
    end
  end

  def index
    students = Student.includes(:group, :school).page params[:page]
    if params[:order]
      students = students.order params[:order]
    end
    respond_to do |format|
      format.csv { send_data students.to_csv }
      format.json { render json: students,
                           serializer: PaginatedSerializer,
                           each_serializer: StudentIndexSerializer }
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
                   status: 201
    else
      unprocessable_response student
    end
  end

  private

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
      :guardian_email,
      :guardian_employer,
      :guardian_first_name,
      :guardian_job_title,
      :guardian_last_name,
      :guardian_phone_number,
      :guardian_phone_type,
      :guardian_relationship,
      :home_phone,
      :last_name,
      :preferred_name,
      :shirt_size,
    )
  end

end
