class Api::SubmissionsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]

  def create
    submission = Submission.new submission_params
    if submission.save
      render json: submission, serializer: SubmissionBaseSerializer
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
      :home_phone,
      :last_name,
      :preferred_name,
      :shirt_size,
    )
  end

end
