class SchoolShowSerializer < SchoolIndexSerializer

  attributes :address_city, :address_one, :address_state,
             :address_two, :address_zip

  has_many :comments, serializer: CommentBaseSerializer
  has_many :secondary_contacts, serializer: ContactBaseSerializer
  has_many :students, serializer: StudentSchoolSerializer

end
