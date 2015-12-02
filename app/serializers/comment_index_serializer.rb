class CommentIndexSerializer < CommentBaseSerializer

  has_one :user, serializer: UserBaseSerializer

end
