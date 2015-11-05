class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def message_response(status, message='')
    render json: { status: status, message: message }
  end

end
