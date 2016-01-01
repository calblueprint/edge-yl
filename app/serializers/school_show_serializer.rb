class SchoolShowSerializer < SchoolIndexSerializer

  attributes :address_city, :address_one, :address_state,
             :address_two, :address_zip, :contact_email,
             :contact_first_name, :contact_last_name,
             :contact_phone_number, :contact_title

  has_many :comments, serializer: CommentBaseSerializer
  has_many :students, serializer: StudentIndexSerializer

end
