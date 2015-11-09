class StudentCommentIndexSerializer < BaseSerializer

    attributes :id, :content, :updated_at

    belongs_to :student
    has_one :user, serializer: UserIndexSerializer

end
