class ConferenceShowSerializer < ConferenceIndexSerializer

  attributes :females_count, :groups_count, :males_count, :rooms_count

  has_many :groups, serializer: GroupIndexSerializer
  has_many :rooms, serializer: RoomConferenceSerializer

  def groups
    object.groups.first(3)
  end

  def rooms
    object.rooms.first(3)
  end

end
