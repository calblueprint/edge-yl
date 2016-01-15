class Api::RoomsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]

  private

  def room_params
    params.require(:room).permite(
      :number,
    )
  end

end
