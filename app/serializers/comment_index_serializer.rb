class CommentIndexSerializer < BaseSerializer

  attributes :id, :content, :updated_at

  belongs_to :user, serializer: UserBaseSerializer

end
