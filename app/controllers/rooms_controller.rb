class RoomsController < BaseController

  def index
    @conferences = Conference.all
    @conference_id = params[:conference_id]
  end

  def show
    @id = params[:id].to_i
  end

end
