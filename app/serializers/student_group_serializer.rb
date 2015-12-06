class StudentGroupSerializer < StudentBaseSerializer

  has_one :school, serializer: SchoolBaseSerializer

end
