class ProspectShowSerializer < ProspectIndexSerializer

  has_many :comments, serializer: CommentBaseSerializer

end
