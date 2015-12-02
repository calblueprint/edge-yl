class FormsController < BaseController

  skip_before_filter :authenticate_user, only: [:show]

  def show
    @id = params[:id].to_i
  end

end
