class UserShowSerializer < UserIndexSerializer

  attributes :email

  has_many :responsibilities, serializer: ResponsibilityIndexSerializer

end
