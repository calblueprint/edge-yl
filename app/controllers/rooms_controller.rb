class RoomsController < BaseController

  def index
    @conference = params[:conference_id] ?
                  Conference.where(id: params[:conference_id]).first :
                  Conference.first
    @conferences = Conference.all
  end

  def show
    @id = params[:id].to_i
  end

end
