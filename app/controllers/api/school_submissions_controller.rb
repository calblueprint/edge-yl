class Api::SchoolSubmissionsController < Api::BaseController

  skip_before_action :authenticate_user

  def create
    school_submission = SchoolSubmission.new school_submission_params
    if school_submission.save
      render json: school_submission,
             serializer: SchoolSubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response school_submission
    end
  end

  def show
    school_submission = SchoolSubmission.find_by id: params[:id]
    render json: school_submission,
           serializer: SchoolSubmissionBaseSerializer
  end

  def submit
    school_submission = SchoolSubmission.find_by id: params[:id]
    if school_submission.submit_submission
      render json: school_submission,
             serializer: SchoolSubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response school_submission
    end
  end

  def update
    school_submission = SchoolSubmission.find_by id: params[:id]
    if school_submission.custom_update school_submission_params
      render json: school_submission,
             serializer: SchoolSubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response school_submission
    end
  end

  private

  def school_submission_params
    params.require(:school_submission).permit(
      :address_city,
      :address_one,
      :address_state,
      :address_two,
      :address_zip,
      :alternate_address_city,
      :alternate_address_one,
      :alternate_address_state,
      :alternate_address_two,
      :alternate_address_zip,
      :alternate_birthday,
      :alternate_cell_phone,
      :alternate_email,
      :alternate_first_name,
      :alternate_gender,
      :alternate_guardian_first_name,
      :alternate_guardian_email,
      :alternate_guardian_last_name,
      :alternate_guardian_phone_number,
      :alternate_guardian_phone_number_ext,
      :alternate_guardian_phone_type,
      :alternate_guardian_relationship,
      :alternate_home_phone,
      :alternate_last_name,
      :alternate_shirt_size,
      :contact_email,
      :contact_first_name,
      :contact_last_name,
      :contact_phone_number,
      :contact_title,
      :conference_id,
      :current_page,
      :has_alternate_student,
      :is_active,
      :name,
      :primary_address_city,
      :primary_address_one,
      :primary_address_state,
      :primary_address_two,
      :primary_address_zip,
      :primary_birthday,
      :primary_cell_phone,
      :primary_email,
      :primary_first_name,
      :primary_home_phone,
      :primary_guardian_first_name,
      :primary_guardian_email,
      :primary_guardian_last_name,
      :primary_guardian_phone_number,
      :primary_guardian_phone_number_ext,
      :primary_guardian_phone_type,
      :primary_guardian_relationship,
      :primary_gender,
      :primary_last_name,
      :primary_shirt_size,
      :website,
    )
  end

end
