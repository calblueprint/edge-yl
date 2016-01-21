class RoomsController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
    @query = {:conference_id => params[:conference_id] ? params[:conference_id] : Conference.first.id,
              :conference_ids => Conference.ids}
  end

  def show
    @id = params[:id].to_i
  end

end
