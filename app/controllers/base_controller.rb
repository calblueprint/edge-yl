class BaseController < ApplicationController

  before_action :authenticate_user

  def authenticate_user
    if user_signed_in?
      profile_json = ProfileBaseSerializer.new(current_user).to_json
      @profile = JSON.parse(profile_json)['user']
    else
      redirect_to login_path
    end
  end

end
