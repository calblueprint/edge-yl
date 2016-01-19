class StudentsController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
    @query = request.query_parameters
  end

  def show
    @id = params[:id].to_i
  end

end
