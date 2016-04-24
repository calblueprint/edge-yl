class Api::StudentsController < Api::BaseController

  skip_before_action :authenticate_user, only: [:create]

  has_scope :conference_id, only: [:index]
  has_scope :gender, only: [:index]
  has_scope :has_group, only: [:index]
  has_scope :has_room, only: [:index]
  has_scope :is_flagged, only: [:index]
  has_scope :is_primary, only: [:index]
  has_scope :sort, only: [:index]

  def check_in
    student = Student.find(params[:id])
    student.is_checked_in = true
    if student.save
      render json: student,
             serializer: StudentShowSerializer,
             status: :created
    else
      unprocessable_response student
    end
  end

  def check_out
    student = Student.find(params[:id])
    student.is_checked_in = false
    if student.save
      render json: student,
             serializer: StudentShowSerializer,
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
    student = Student.find params[:id]
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
    students = apply_scopes(Student).includes(:conference, :group, :room, :school)
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
      :allergies_other,
      :birthday,
      :conference_id,
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
      :medications,
      :other_dietary_restrictions,
      :preferred_name,
      :psychologist_consent,
      :psychologist_consent_name,
      :shirt_size,
    )
  end

end
