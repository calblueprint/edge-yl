class StudentIndexSerializer < StudentBaseSerializer

  belongs_to :school, serializer: SchoolBaseSerializer
  belongs_to :group, serializer: GroupBaseSerializer

end
