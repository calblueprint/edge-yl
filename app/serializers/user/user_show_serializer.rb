class UserShowSerializer < UserIndexSerializer

  attributes :first_name,
             :last_name

  has_one :leadership, serializer: LeadershipBaseSerializer
  has_many :responsibilities, serializer: ResponsibilityIndexSerializer

end
