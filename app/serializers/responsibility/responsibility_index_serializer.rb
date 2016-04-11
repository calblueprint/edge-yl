class ResponsibilityIndexSerializer < ResponsibilityBaseSerializer

  has_one :conference, serializer: ConferenceBaseSerializer
  has_one :school, serializer: SchoolIndexSerializer
  has_one :user, serializer: UserBaseSerializer

end
