class StudentShowSerializer < StudentIndexSerializer

  attributes :cell_phone, :home_phone, :guardian_one_name,
             :guardian_one_phone, :guardian_one_email, :guardian_two_name,
             :guardian_two_phone, :guardian_two_email

  has_many :comments, serializer: CommentIndexSerializer

  has_one :group, serializer: GroupStudentSerializer

end
