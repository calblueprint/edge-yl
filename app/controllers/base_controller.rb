class BaseController < ApplicationController

  before_filter :authenticate_user

  def authenticate_user
    redirect_to login_path if !user_signed_in?
    profile_json = ProfileBaseSerializer.new(current_user).to_json
    @profile = JSON.parse(profile_json)['user']
  end

end
