class UserShowSerializer < UserIndexSerializer

  has_many :responsibilities, serializer: ResponsibilityIndexSerializer

end
