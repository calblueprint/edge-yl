class CommentIndexSerializer < CommentBaseSerializer

  belongs_to :user, serializer: UserBaseSerializer

end
