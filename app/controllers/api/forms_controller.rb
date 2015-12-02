class Api::FormsController < Api::BaseController

  def show
    form = Form.find params[:id]
    render json: form
  end

end
