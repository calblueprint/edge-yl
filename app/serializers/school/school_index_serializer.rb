class SchoolIndexSerializer < SchoolBaseSerializer

  attributes :website

  has_one :primary_contact, serializer: ContactBaseSerializer

end
