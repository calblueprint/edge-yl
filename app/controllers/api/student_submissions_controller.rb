class Api::StudentSubmissionsController < Api::BaseController

  skip_before_filter :authenticate_user

  def create
    student_submission = StudentSubmission.new student_submission_params
    if student_submission.save
      render json: student_submission,
             serializer: StudentSubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response student_submission
    end
  end

  def show
    student_submission = StudentSubmission.find_by id: params[:id]
    render json: student_submission,
           serializer: StudentSubmissionBaseSerializer
  end

  def submit
    student_submission = StudentSubmission.find_by id: params[:id]
    if student_submission.submit_submission
      render json: student_submission,
             serializer: StudentSubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response student_submission
    end
  end

  def update
    student_submission = StudentSubmission.find_by id: params[:id]
    if student_submission.custom_update student_submission_params
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
      :carpool,
      :cell_phone,
      :ceremony_attendance,
      :ceremony_attendance_number,
      :current_page,
      :dietary_restrictions,
      :email,
      :emergency_consent,
      :exercise_limitations,
      :first_name,
      :gender,
      :guardian_one_email,
      :guardian_one_employer,
      :guardian_one_first_name,
      :guardian_one_job_title,
      :guardian_one_last_name,
      :guardian_one_phone_number,
      :guardian_one_phone_type,
      :guardian_one_relationship,
      :guardian_two_email,
      :guardian_two_employer,
      :guardian_two_first_name,
      :guardian_two_job_title,
      :guardian_two_last_name,
      :guardian_two_phone_number,
      :guardian_two_phone_type,
      :guardian_two_relationship,
      :health_conditions,
      :home_phone,
      :immunizations,
      :insurance,
      :insurance_address,
      :insurance_address_city,
      :insurance_address_state,
      :insurance_address_zip,
      :insurance_id,
      :insurance_phone_number,
      :insurance_provider,
      :insurance_other,
      :is_active,
      :last_name,
      :media_information,
      :media_newspaper,
      :media_participation,
      :medical_guardian_name,
      :medications,
      :other_dietary_restrictions,
      :preferred_name,
      :psychologist_consent,
      :shirt_size,
      :transportation,
      :transportation_arrival_date,
      :transportation_arrival_time,
      :transportation_carrier,
      :transportation_departure_date,
      :transportation_departure_time,
      :transportation_name,
      :transportation_number,
    )
  end

end
