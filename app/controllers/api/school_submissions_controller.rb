class Api::SchoolSubmissionsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create, :show, :update]

  def create
    school_submission = SchoolSubmission.new school_submission_params
    if school_submission.save
      # TODO(Warren): Is there a better way to set the uuid?
      response = SchoolSubmission.find school_submission.id
      render json: response,
             serializer: SchoolSubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response school_submission
    end
  end

  def show
    school_submission = SchoolSubmission.find_by uuid: params[:uuid]
    render json: school_submission,
           serializer: SchoolSubmissionBaseSerializer
  end

  def update
    school_submission = SchoolSubmission.find_by uuid: params[:uuid]
    if school_submission.update_attributes school_submission_params
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
      :contact_email,
      :contact_first_name,
      :contact_last_name,
      :contact_phone_number,
      :contact_title,
      :current_page,
      :is_draft,
      :student_address_city,
      :student_address_one,
      :student_address_state,
      :student_address_two,
      :student_address_zip,
      :student_birthday,
      :student_cell_phone,
      :student_email,
      :student_first_name,
      :student_home_phone,
      :student_guardian_first_name,
      :student_guardian_email,
      :student_guardian_last_name,
      :student_guardian_phone_number,
      :student_guardian_phone_type,
      :student_guardian_relationship,
      :student_gender,
      :student_last_name,
      :student_shirt_size,
      :name,
      :website,
    )
  end

end
