class StudentShowSerializer < StudentIndexSerializer

  attributes :cell_phone, :home_phone

  has_one :student_conference

end
