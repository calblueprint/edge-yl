class StudentIndexSerializer < StudentBaseSerializer

  has_one :group, serializer: GroupStudentSerializer
  has_one :school, serializer: SchoolBaseSerializer


end
