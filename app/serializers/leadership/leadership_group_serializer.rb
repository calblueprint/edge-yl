class LeadershipGroupSerializer < LeadershipBaseSerializer

  has_one :leadershipable, serializer: LeadershipableSerializer

end
