class Api::SchoolSubmissionsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create, :show, :update]

  def create
    submission = SchoolSubmission.new submission_params
    if submission.save
      # TODO(Warren): Is there a better way to set the uuid?
      response = SchoolSubmission.find submission.id
      render json: response,
             serializer: SubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response submission
    end
  end

  def show
    submission = SchoolSubmission.find_by uuid: params[:uuid]
    render json: submission, serializer: SubmissionBaseSerializer
  end

  def update
    submission = SchoolSubmission.find_by uuid: params[:uuid]
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
    params.require(:school_submission).permit(
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
