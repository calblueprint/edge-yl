class ThreadsController < BaseController

  def index
    @page = params[:page] ? params[:page].to_i : 1
    if params[:sent] == 'true'
      @toast = 'Email sent!'
    end
  end

  def show
    @id = params[:id].to_i
  end

end
