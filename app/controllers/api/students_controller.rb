class Api::StudentsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]

  has_scope :gender, only: [:index]
  has_scope :is_flagged, only: [:index]
  has_scope :is_primary, only: [:index]
  has_scope :sort, only: [:index]

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
    students = apply_scopes(Student).all
    send_data students.to_csv
  end

  def index_json
    students = apply_scopes(Student).includes(:group, :room, :school)
                                    .page params[:page]
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
      :allergies,
      :birthday,
      :cell_phone,
      :dietary_restrictions,
      :exercise_restrictions,
      :email,
      :emergency_consent,
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
      :health_conditions,
      :home_phone,
      :immunizations,
      :is_flagged,
      :is_primary,
      :last_name,
      :medical_guardian_name,
      :medications,
      :other_dietary_restrictions,
      :preferred_name,
      :psychologist_consent,
      :shirt_size,
    )
  end

end
