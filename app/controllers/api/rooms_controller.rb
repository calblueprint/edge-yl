class Api::RoomsController < Api::BaseController

  def index
    rooms = Room.page params[:page]
    if params[:conference_id]
      rooms = rooms.where params[:conference_id]
    end
    respond_to do |format|
      format.csv { send_data rooms.to_csv }
      format.json { render json: rooms,
                           serializer: PaginatedSerializer,
                           each_serializer: RoomIndexSerializer }
    end
  end

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
