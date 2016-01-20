class RoomShowSerializer < RoomBaseSerializer

  has_many :students, serializer: StudentBaseSerializer

end
