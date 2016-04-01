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

  def destroy
    room = Room.find params[:id]
    room.remove_students
    if room.destroy
      render json: room,
             serializer: RoomShowSerializer,
             status: :ok
    else
      unprocessable_response room
    end
  end

  def index
    respond_to do |format|
      format.csv { index_csv }
    end
  end

  def show
    respond_to do |format|
      format.csv { show_csv }
      format.json { show_json }
    end
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

  def room_params
    params.require(:room).permit(
      :building,
      :capacity,
      :conference_id,
      :gender,
      :number,
    )
  end

  def show_csv
    room = Room.find params[:id]
    send_data room.students.to_csv
  end

  def show_json
    room = Room.find params[:id]
    render json: room, serializer: RoomShowSerializer
  end

end
