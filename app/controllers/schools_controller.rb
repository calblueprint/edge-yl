class SchoolsController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
  end

  def show
    @id = params[:id].to_i
    current_user.create_visit(@id, :School)
  end

end
