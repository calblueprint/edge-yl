class GroupsController < BaseController

  def show
    @id = params[:id].to_i
  end

  def index
    @conference = params[:conference_id] ?
                  Conference.where(id: params[:conference_id]).first :
                  Conference.first
    @conferences = Conference.all
  end

end
