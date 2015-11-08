class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def profile
    if user_signed_in?
      @current_user = current_user
    else
      redirect_to login_path
    end
  end

end