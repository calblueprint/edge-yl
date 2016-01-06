class Api::EmailsController < Api::BaseController

  skip_before_filter :authenticate_user

  def create
    puts params
    custom_params = ActionController::Parameters.new(
      content: params['body-plain'],
      receiver: params[:recipient],
      sender: params[:from],
      subject: params[:subject],
    )
    email = Email.new email_params(custom_params)
    if email.save
      render json: { message: 'Received' }, status: :ok
    else
      unprocessable_response email
    end
  end

  private

  def email_params(params)
    params.permit(
      :content,
      :receiver,
      :sender,
      :subject,
    )
  end

end
