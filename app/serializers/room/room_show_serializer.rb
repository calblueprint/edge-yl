class RoomShowSerializer < RoomBaseSerializer

  attributes :gender_choices

  has_many :students, serializer: StudentRoomSerializer

  def gender_choices
    EnumConstants::BINARY_GENDERS
  end

end
