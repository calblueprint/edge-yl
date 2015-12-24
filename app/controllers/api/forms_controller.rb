class Api::FormsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:show]

  def show
    form = Form.includes(sections: :questions).find params[:id]
    render json: form, serializer: FormShowSerializer
  end

end
