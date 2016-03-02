class GroupIndexSerializer < GroupBaseSerializer

  attributes :students_count

  has_many :leaderships, serializer: LeadershipGroupSerializer

end
