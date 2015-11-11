class BaseController < ApplicationController

  before_filter :authenticate_user

  def authenticate_user
    redirect_to login_path if !user_signed_in?
  end

end
