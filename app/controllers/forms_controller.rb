class FormsController < BaseController

  skip_before_filter :authenticate_user, only: [:show]

  def show
    @page = params[:page] ? params[:page].to_i : 1
    @target = params[:target]
    @uuid = params[:uuid]
    if @page > 1 && @uuid.nil?
      redirect_to forms_path(target: params[:target])
    end
  end

  def success
    @target = params[:target]
    @uuid = params[:uuid]
  end

end
