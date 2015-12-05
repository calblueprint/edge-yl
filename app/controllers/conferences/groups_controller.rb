class Conferences::GroupsController < BaseController

  def index
  end

  def show
  	@conferenceId = params[:conference_id].to_i
    @id = params[:id].to_i
  end

end
