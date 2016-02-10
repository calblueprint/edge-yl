class FormsController < BaseController

  skip_before_filter :authenticate_user, only: [:show]

  def show
    @target = params[:target]
  end

end
