class StudentsController < BaseController

  def index
    students = Student.page params[:page]
    @pagination = {
      current: params[:page] ? params[:page].to_i : 1,
      limit: students.total_pages,
      per: Kaminari.config.default_per_page,
    }
  end

  def show
    @id = params[:id].to_i
  end

end
