class Api::SchoolSubmissionsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create, :show, :update]

  def create
    school_submission = SchoolSubmission.new school_submission_params
    if school_submission.save
      # TODO(Warren): Is there a better way to set the uuid?
      response = SchoolSubmission.find school_submission.id
      render json: response,
             serializer: SubmissionBaseSerializer,
             status: :created
    else
      unprocessable_response school_submission
    end
  end

  def show
    school_submission = SchoolSubmission.find_by uuid: params[:uuid]
    render json: school_submission, serializer: SubmissionBaseSerializer
  end

  def update
    school_submission = SchoolSubmission.find_by uuid: params[:uuid]
    if school_submission.update_attributes school_submission_params
      render json: school_submission,
             serializer: SubmissionBaseSerializer,
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
      :name,
      :website,
    )
  end

end
