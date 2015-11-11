class StudentShowSerializer < StudentIndexSerializer

  has_many :comments, serializer: StudentCommentIndexSerializer

end
