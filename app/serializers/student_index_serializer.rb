class StudentIndexSerializer < BaseSerializer

  attributes :id, :birthday, :cell_phone, :email,
             :first_name, :last_name, :home_address

  has_one :school, serializer: SchoolIndexSerializer
  has_many :comments, serializer: CommentIndexSerializer

end
