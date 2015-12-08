class StudentIndexSerializer < StudentBaseSerializer

  attributes :is_flagged, :is_primary, :registration_status

  has_one :group, serializer: GroupStudentSerializer
  has_one :school, serializer: SchoolBaseSerializer

end
