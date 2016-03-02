class ConferenceShowSerializer < ConferenceIndexSerializer

  attributes :females_count,
             :groups_count,
             :males_count,
             :rooms_count,
             :students_count,
             :unassigned_students_count

  has_many :groups, serializer: GroupIndexSerializer
  has_many :rooms, serializer: RoomConferenceSerializer

  def groups
    object.groups
  end

  def rooms
    object.rooms
  end

end
