class ConferenceShowSerializer < ConferenceIndexSerializer

  attributes :checked_in_count,
             :groupless_students_count,
             :groups_count,
             :roomless_students_count,
             :rooms_count,
             :students_count

  has_many :groups, serializer: GroupIndexSerializer
  has_many :rooms, serializer: RoomConferenceSerializer

  def groups
    object.groups
  end

  def rooms
    object.rooms
  end

end
