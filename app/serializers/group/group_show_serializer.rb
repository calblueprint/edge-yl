class GroupShowSerializer < GroupIndexSerializer

  attributes :females_count,
             :letter,
             :males_count,
             :others_count

  has_many :students, serializer: StudentGroupSerializer

  has_one :conference, serializer: ConferenceBaseSerializer

end
