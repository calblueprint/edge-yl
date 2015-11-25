class ApplicationController < ActionController::Base

  protect_from_forgery with: :null_session

  def create_visit(category=nil, target=nil)
    Visit.create category: category, target: target, user_id: current_user.id
  end

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
