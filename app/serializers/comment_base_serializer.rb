class CommentBaseSerializer < BaseSerializer

  attributes :id, :content, :updated_at

  has_one :user, serializer: UserBaseSerializer

end

