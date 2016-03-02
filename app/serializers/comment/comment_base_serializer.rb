class CommentBaseSerializer < BaseSerializer

  attributes :id,
             :commentable_id,
             :commentable_type,
             :content,
             :updated_at

  has_one :user, serializer: UserBaseSerializer

  def updated_at
    object.updated_at.to_date
  end

end

