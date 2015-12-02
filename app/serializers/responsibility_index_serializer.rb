class ResponsibilityIndexSerializer < ResponsibilityBaseSerializer

  has_one :user, serializer: UserBaseSerializer

end
