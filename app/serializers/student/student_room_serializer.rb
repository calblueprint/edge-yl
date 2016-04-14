class StudentRoomSerializer < StudentBaseSerializer

  attributes :cell_phone,
             :email,
             :is_flagged,
             :is_primary

  has_one :group, serializer: GroupBaseSerializer
  has_one :school, serializer: SchoolBaseSerializer

end
