class Api::FeedbacksController < Api::BaseController

  skip_before_filter :authenticate_user

  def create
    feedback = Feedback.new feedback_params(params)
    if feedback.save
      render json: { message: 'Received' }, status: :created
    else
      unprocessable_response feedback
    end
  end

  private

  def feedback_params(params)
    params.require(:feedback).permit(
      :content,
      :user_id
    )
  end

end
