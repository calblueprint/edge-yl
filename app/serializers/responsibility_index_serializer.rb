class ResponsibilityIndexSerializer < ResponsibilityBaseSerializer

  has_one :student, serializer: StudentBaseSerializer
  has_one :user, serializer: UserBaseSerializer

end
