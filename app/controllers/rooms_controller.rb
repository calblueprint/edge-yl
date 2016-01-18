class RoomsController < BaseController

  def show
    @id = params[:id].to_i
  end

end
