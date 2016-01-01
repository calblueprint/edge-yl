class BaseController < ApplicationController

  before_filter :authenticate_user

  def authenticate_user
    redirect_to login_path if !user_signed_in?
  end

  def current_profile
    JSON.parse(ProfileBaseSerializer.new(current_user).to_json)['user']
  end

end
