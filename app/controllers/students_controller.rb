class StudentsController < BaseController

  def index
    @conference = params[:conference_id] ?
                  Conference.where(id: params[:conference_id]).first :
                  Conference.first
    @conferences = Conference.all
    @page = params[:page] ? params[:page].to_i : 1
    @query = request.query_parameters.except('page')
  end

  def show
    @id = params[:id].to_i
  end

end
