class GroupsController < BaseController

  def show
    @id = params[:id].to_i
  end

end
