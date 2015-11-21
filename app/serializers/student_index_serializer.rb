class StudentIndexSerializer < StudentBaseSerializer

  belongs_to :school, serializer: SchoolBaseSerializer

end
