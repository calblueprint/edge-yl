class StudentShowSerializer < StudentIndexSerializer

  has_many :student_comments, serializer: StudentCommentIndexSerializer

end
