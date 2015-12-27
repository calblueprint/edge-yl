class GroupIndexSerializer < GroupBaseSerializer

  attributes :conference_id

  has_many :leaderships, serializer: LeadershipGroupSerializer

end
