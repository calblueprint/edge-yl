class StudentIndexSerializer < StudentBaseSerializer

  attributes :cell_phone,
             :email,
             :is_flagged,
             :is_primary

  has_one :conference, serializer: ConferenceBaseSerializer
  has_one :group, serializer: GroupBaseSerializer
  has_one :room, serializer: RoomBaseSerializer
  has_one :school, serializer: SchoolBaseSerializer

end
