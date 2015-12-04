class ConferenceShowSerializer < ConferenceIndexSerializer

  has_many :groups, serializer: GroupBaseSerializer

end
