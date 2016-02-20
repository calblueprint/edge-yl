class Api::SubmissionsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create, :show, :update]

  def create
    submission = Submission.new submission_params
    if submission.save
      # TODO(Warren): Is there a better way to set the uuid?
      response = Submission.find submission.id
      render json: response,
             serializer: SubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response submission
    end
  end

  def show
    submission = Submission.find_by uuid: params[:uuid]
    render json: submission, serializer: SubmissionBaseSerializer
  end

  def update
    submission = Submission.find_by uuid: params[:uuid]
    if submission.update_attributes submission_params
      render json: submission,
             serializer: SubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response submission
    end
  end

  private

  def submission_params
    params.require(:submission).permit(
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
      :is_draft,
      :last_name,
      :preferred_name,
      :shirt_size,
    )
  end

end
