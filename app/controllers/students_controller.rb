class StudentsController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
  end

  def show
    @id = params[:id].to_i
    create_visit id: @id, type: :Student
  end

end
