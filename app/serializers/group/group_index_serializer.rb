class GroupIndexSerializer < GroupBaseSerializer

  has_many :leaderships, serializer: LeadershipGroupSerializer

end
