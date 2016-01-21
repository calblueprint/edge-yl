class RoomIndexSerializer < RoomBaseSerializer

  has_one :conference, serializer: ConferenceBaseSerializer

end
