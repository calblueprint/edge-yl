class LeadershipGroupSerializer < LeadershipBaseSerializer

  has_one :user, serializer: UserBaseSerializer

end
