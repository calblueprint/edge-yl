class StudentShowSerializer < StudentIndexSerializer

  attributes :cell_phone, :home_phone

  has_one :student_conference, serializer: StudentConferenceBaseSerializer

end
