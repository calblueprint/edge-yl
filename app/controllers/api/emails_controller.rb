class Api::EmailsController < Api::BaseController

  skip_before_filter :authenticate_user

  def create
    email = Email.new params
    if email.save
      render json: message: 'Received', status: :ok
    else
      unprocessable_response email
    end
  end

end
