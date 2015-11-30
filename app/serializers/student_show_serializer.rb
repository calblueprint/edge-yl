class StudentShowSerializer < StudentIndexSerializer

  attributes :cell_phone, :home_phone, :guardian_one_name, :guardian_one_phone, :guardian_one_email,
  					 :guardian_two_name, :guardian_two_phone, :guardian_two_email

  has_one :student_conference, serializer: StudentConferenceBaseSerializer

end
