class StudentsController < BaseController

  def index
    if params[:conference_id]
      @conference = Conference.find params[:conference_id].to_i
    end
    @conference ||= Conference.first
    @conferences = Conference.all
    @page = params[:page] ? params[:page].to_i : 1
    @query = request.query_parameters.except('page')
  end

  def show
    @id = params[:id].to_i
  end

  def submission
    @student = Student.find params[:id].to_i
  end

end
