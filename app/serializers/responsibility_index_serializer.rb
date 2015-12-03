class ResponsibilityIndexSerializer < ResponsibilityBaseSerializer

  has_one :user, serializer: UserBaseSerializer
  has_one :student, serializer: StudentBaseSerializer
end
