class Api::StudentSubmissionsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create, :show, :update]

  def create
    student_submission = StudentSubmission.new student_submission_params
    if student_submission.save
      # TODO(Warren): Is there a better way to set the uuid?
      response = StudentSubmission.find student_submission.id
      render json: response,
             serializer: StudentSubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response student_submission
    end
  end

  def show
    student_submission = StudentSubmission.find_by uuid: params[:uuid]
    render json: student_submission,
           serializer: StudentSubmissionBaseSerializer
  end

  def update
    student_submission = StudentSubmission.find_by uuid: params[:uuid]
    if student_submission.update_attributes student_submission_params
      render json: student_submission,
             serializer: StudentSubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response student_submission
    end
  end

  private

  def student_submission_params
    params.require(:student_submission).permit(
      :address_city,
      :address_one,
      :address_state,
      :address_two,
      :address_zip,
      :allergies,
      :birthday,
      :cell_phone,
      :current_page,
      :dietary_restrictions,
      :email,
      :emergency_consent,
      :exercise_limitations,
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
      :health_conditions,
      :home_phone,
      :immunizations,
      :is_draft,
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
