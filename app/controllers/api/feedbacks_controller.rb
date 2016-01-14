class Api::FeedbacksController < Api::BaseController

  def create
    feedback = Feedback.new feedback_params
    if feedback.save
      render json: { message: 'Received' }, status: :created
    else
      unprocessable_response feedback
    end
  end

  private

  def feedback_params
    params.require(:feedback).permit(
      :content,
      :user_id
    )
  end

end
