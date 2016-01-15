class Api::RoomsController < Api::BaseController

  skip_before_filter :authenticate_user, only: [:create]


  def show
    room = Room.find params[:id]
    render json: room, serializer: RoomShowSerializer
  end

  def update
    room = room.find params[:id]
    if room.update_attributes room_params
      render json: room,
             serializer: RoomShowSerializer,
             status: :created
    else
      unprocessable_response room
    end
  end

  private

  def room_params
    params.require(:room).permit(
      :number,
    )
  end

end
