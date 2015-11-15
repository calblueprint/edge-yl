class StudentsController < BaseController

  def index
    students = Student.includes(:school).page params[:page]
    @limit = students.total_pages
    @page = params[:page] ? params[:page].to_i : 1
  end

  def show
    @id = params[:id].to_i
  end

end
