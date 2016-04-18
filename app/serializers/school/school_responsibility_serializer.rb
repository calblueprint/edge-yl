class SchoolResponsibilitySerializer < ResponsibilityBaseSerializer

  has_one :conference, serializer: ConferenceBaseSerializer
  has_one :user, serializer: UserBaseSerializer

end
