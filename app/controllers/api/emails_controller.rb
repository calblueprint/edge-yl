class Api::EmailsController < Api::BaseController

  skip_before_filter :authenticate_user

  def create
    custom_params = ActionController::Parameters.new(
      content: params['body-plain'],
      from: params[:from],
      receiver: params[:recipient],
      sender: params[:sender],
      to: params[:to],
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
      :from,
      :receiver,
      :sender,
      :subject,
      :to,
    )
  end

end
