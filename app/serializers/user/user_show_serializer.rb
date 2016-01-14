class UserShowSerializer < UserIndexSerializer

  attributes :first_name, :last_name

  has_many :responsibilities, serializer: ResponsibilityIndexSerializer

  has_one :leadership, serializer: LeadershipBaseSerializer

end
