class ConferenceIndexSerializer < ConferenceBaseSerializer

  has_many :groups, serializer: GroupBaseSerializer

end
