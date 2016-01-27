class RoomsController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
    @conference_id = params[:conference_id] ?
                     params[:conference_id].to_i :
                     Conference.first.id
  end

  def show
    @id = params[:id].to_i
  end

end
