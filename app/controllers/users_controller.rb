class UsersController < ApplicationController

  def index
    @users = User.all
  end

  def profile
    @current_user = current_user
    puts current_user.first_name
  end

end
