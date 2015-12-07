class GroupShowSerializer < GroupIndexSerializer

  has_many :students, serializer: StudentGroupSerializer

  has_one :conference, serializer: ConferenceBaseSerializer

end
