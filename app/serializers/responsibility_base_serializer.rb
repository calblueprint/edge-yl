class ResponsibilityBaseSerializer < BaseSerializer

  attributes :id, :status
  has_one :user, serializer: UserBaseSerializer

end

