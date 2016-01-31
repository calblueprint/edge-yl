class Api::RoomsController < Api::BaseController

  def index
    rooms = Room.includes(:conference).where conference_id: params[:conference_id]
    respond_to do |format|
      format.csv { send_data rooms.to_csv }
      format.json { render json: rooms, each_serializer: RoomIndexSerializer }
    end
  end

  def show
    room = Room.find params[:id]
    render json: room, serializer: RoomShowSerializer
  end

  def update
    room = Room.find params[:id]
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
      :conference_id,
      :number,
    )
  end

end
