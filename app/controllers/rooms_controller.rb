class RoomsController < BaseController

  def index
    @conferences = Conference.all
    @conference = params[:conference_id] ?
                  Conference.where(id: params[:conference_id]) :
                  Conference.first
  end

  def show
    @id = params[:id].to_i
  end

end
