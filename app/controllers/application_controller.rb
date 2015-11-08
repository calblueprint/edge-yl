class ApplicationController < ActionController::Base
  protect_from_forgery with: :null_session

  def error_response(object=nil, message: nil, status: nil)
    render json: { message: response_message(object, message) }, status: status
  end

  def unauthorized_response
    error_response(message: 'Unauthorized', status: 403)
  end

  private

  def response_message(object, message)
    message ||= object.errors.full_messages.to_sentence
  end

end
