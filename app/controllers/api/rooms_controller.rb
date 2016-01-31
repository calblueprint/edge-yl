class Api::RoomsController < Api::BaseController

  def index
    rooms = Room.includes(:conference).where conference_id: params[:conference_id]
    respond_to do |format|
      format.csv { send_data rooms.to_csv }
      format.json { render json: rooms, each_serializer: RoomIndexSerializer }
    end
  end

  def show
    respond_to do |format|
      format.csv { show_csv }  
      format.json { show_json }
    end
  end

  def update
    room = room.find params[:id]
    if room.update_attributes room_params
      render json: room,
             serializer: RoomShowSerializer,
             status: :created
    else_
      unprocessable_response room
    end
  end

  private

  def room_params
    params.require(:room).permit(
      :number,
    )
  end

  def show_csv
    room = Room.find params[:id]
    send_data room.students.to_csv
  end

  def show_json
    render json: room, serializer: RoomShowSerializer
  end

end
