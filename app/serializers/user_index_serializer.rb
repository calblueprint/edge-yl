class UserIndexSerializer < UserBaseSerializer

  has_many :comments, serializer: CommentBaseSerializer

end
