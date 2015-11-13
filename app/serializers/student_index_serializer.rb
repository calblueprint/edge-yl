class StudentIndexSerializer < StudentBaseSerializer

  has_one :school, serializer: SchoolIndexSerializer

end
