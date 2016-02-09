class Api::BaseController < ApplicationController

  respond_to :json, :csv

  before_filter :authenticate_user

  def authenticate_user
    unauthorized_response if !user_signed_in?
  end

end
