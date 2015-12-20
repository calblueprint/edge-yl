class StudentShowSerializer < StudentIndexSerializer

  attributes :address_city, :address_one, :address_state, :address_two,
             :address_zip, :birthday, :gender,
             :guardian_one_name, :guardian_one_phone, :guardian_one_email,
             :guardian_two_name, :guardian_two_phone, :guardian_two_email,
             :home_phone, :preferred_name, :shirt_size

  has_many :comments, serializer: CommentIndexSerializer

  has_one :group, serializer: GroupStudentSerializer
  has_one :responsibility, serializer: ResponsibilityStudentSerializer

end
