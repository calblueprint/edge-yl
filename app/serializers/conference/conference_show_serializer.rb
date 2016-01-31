class ConferenceShowSerializer < ConferenceIndexSerializer

  attributes :groups_count, :rooms_count, :females_count, :males_count

  has_many :groups, serializer: GroupIndexSerializer
  has_many :rooms, serializer: RoomConferenceSerializer

  def groups
    object.groups.first(3)
  end

  def rooms
    object.rooms.first(3)
  end

end
