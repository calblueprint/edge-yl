class StudentIndexSerializer < StudentBaseSerializer

  has_one :school, serializer: SchoolBaseSerializer

end
