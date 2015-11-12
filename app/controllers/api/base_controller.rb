class Api::BaseController < ApplicationController

  respond_to :json

  def error_response(object: nil, message: nil, status: nil)
    render json: { message: response_message(object, message) }, status: status
  end

  def unprocessable_response(object)
    error_response object: object, status: 422
  end

  def unauthorized_response
    error_response message: 'Unauthorized', status: 403
  end

  private

  def response_message(object=nil, message=nil)
    message || object.errors.full_messages.to_sentence
  end

end
