class GroupIndexSerializer < GroupBaseSerializer

  has_many :students, serializer: StudentBaseSerializer
  has_one :conference, serializer: ConferenceBaseSerializer

end
