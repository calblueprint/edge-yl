class StudentIndexSerializer < StudentBaseSerializer

  has_one :group, serializer: GroupBaseSerializer
  has_one :school, serializer: SchoolBaseSerializer

end
