class StudentsController < BaseController

  def index
    @conference = Conference.where(id: params[:conference_id]).first if params[:conference_id]
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
    puts @student
  end

end
