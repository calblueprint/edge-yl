class GroupShowSerializer < GroupIndexSerializer

  has_many :students, serializer: StudentGroupSerializer

end
