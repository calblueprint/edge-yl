class CommentBaseSerializer < BaseSerializer

  attributes :id, :commentable_id, :commentable_type, :content, :updated_at

  has_one :user, serializer: UserBaseSerializer

end

