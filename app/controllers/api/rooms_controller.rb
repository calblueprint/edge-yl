class Api::RoomsController < Api::BaseController

  has_scope :conference_id, only: [:index]

  def create
    room = Room.new room_params
    if room.save
      render json: room,
             serializer: RoomIndexSerializer,
             status: :created
    else
      unprocessable_response room
    end
  end

  def index
    respond_to do |format|
      format.csv { index_csv }
      format.json { index_json }
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

  def index_csv
    csv_rooms = apply_scopes(Room).includes(:students)
    send_data csv_rooms.to_csv
  end

  def index_json
    rooms = Room.includes(:conference).where conference_id: params[:conference_id]
    render json: rooms,
           each_serializer: RoomIndexSerializer
  end

  def room_params
    params.require(:room).permit(
      :capacity,
      :conference_id,
      :gender,
      :number,
    )
  end

end
