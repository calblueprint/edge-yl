class UserIndexSerializer < BaseSerializer

    attributes :id, :first_name, :last_name, :birthday, :is_admin, :created_at

    belongs_to :student_comments, serializer: StudentCommentIndexSerializer

end
