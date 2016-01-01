class StudentsController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
    @profile = current_profile
  end

  def show
    @id = params[:id].to_i
    @profile = current_profile
  end

end
