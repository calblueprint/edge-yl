class StudentGroupSerializer < StudentBaseSerializer

  attributes :cell_phone,
             :email,
             :is_flagged,
             :is_primary,
             :registration_status

  has_one :room, serializer: RoomBaseSerializer
  has_one :school, serializer: SchoolBaseSerializer

end
