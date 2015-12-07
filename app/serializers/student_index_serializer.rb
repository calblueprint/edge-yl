class StudentIndexSerializer < StudentBaseSerializer

  attributes :registration_status

  has_one :group, serializer: GroupStudentSerializer
  has_one :school, serializer: SchoolBaseSerializer

end
