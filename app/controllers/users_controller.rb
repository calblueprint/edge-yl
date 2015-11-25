 class UsersController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
  end

  def profile
  end

end
