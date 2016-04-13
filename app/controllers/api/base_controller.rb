class Api::BaseController < ApplicationController

  respond_to :json, :csv

  before_action :authenticate_user

  def authenticate_user
    unauthorized_response unless user_signed_in?
  end

end
