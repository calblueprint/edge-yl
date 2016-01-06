class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session

  def error_response(object: nil, message: nil, status: nil)
    render json: response_message(object, message), status: status
  end

  def unprocessable_response(object)
    error_response object: object, status: :unprocessable_entity
  end

  def unauthorized_response
    error_response message: 'Unauthorized', status: :unauthorized
  end

  private

  def response_message(object=nil, message=nil)
    if message
      { message: message }
    else
      { errors: object.errors.to_hash(true) }
    end
  end

end
