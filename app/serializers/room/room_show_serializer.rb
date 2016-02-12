class RoomShowSerializer < RoomBaseSerializer

  has_many :students, serializer: StudentRoomSerializer

end
