class ResponsibilityIndexSerializer < ResponsibilityBaseSerializer

  belongs_to :user, serializer: UserBaseSerializer

end
