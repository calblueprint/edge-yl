class UsersController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
  end

  def show
    @id = params[:id].to_i
  end

  def profile
  end

end
