class ConferenceShowSerializer < ConferenceIndexSerializer

  attributes :females_count,
             :groups_count,
             :males_count,
             :rooms_count

  has_many :groups, serializer: GroupIndexSerializer
  has_many :rooms, serializer: RoomConferenceSerializer

  def groups
    object.groups
  end

  def rooms
    object.rooms
  end

end
