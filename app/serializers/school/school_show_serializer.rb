class SchoolShowSerializer < SchoolIndexSerializer

  attributes :address_city, :address_one, :address_state,
             :address_two, :address_zip, :other_contacts,
             :primary_contact

  has_many :comments, serializer: CommentBaseSerializer
  has_many :contacts, serializer: ContactBaseSerializer
  has_many :students, serializer: StudentIndexSerializer

end
