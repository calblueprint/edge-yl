class ConferenceShowSerializer < ConferenceIndexSerializer

  has_many :groups, serializer: GroupIndexSerializer

end
