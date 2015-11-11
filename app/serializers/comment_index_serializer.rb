class CommentIndexSerializer < BaseSerializer

  attributes :id, :content, :updated_at

  belongs_to :student
  belongs_to :user, serializer: UserIndexSerializer

end
