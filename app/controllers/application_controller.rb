class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def error_response(object=nil, message=nil, status)
    render json: { status: status, message: message }
  end

  def unauthorized_response
    error_response(message: 'Unauthorized', status: 403)
  end

end
