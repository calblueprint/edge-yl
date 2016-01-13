class ResponsibilityStudentSerializer < ResponsibilityBaseSerializer

  has_one :user, serializer: UserBaseSerializer

end
