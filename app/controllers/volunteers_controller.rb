class VolunteersController < BaseController

  def index
    @conference = Conference.where(id: params[:conference_id]).first if params[:conference_id]
    @conference ||= Conference.first
    @conferences = Conference.all
    @page = params[:page] ? params[:page].to_i : 1
  end

  def show
    @id = params[:id].to_i
  end

end
