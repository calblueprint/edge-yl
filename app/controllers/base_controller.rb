class BaseController < ApplicationController

  before_filter :authenticate_user

  def authenticate_user
    if !user_signed_in?
      redirect_to login_path
    else
      profile_json = ProfileBaseSerializer.new(current_user).to_json
      @profile = JSON.parse(profile_json)['user']
    end
  end

end
