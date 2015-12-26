class GroupIndexSerializer < GroupBaseSerializer

  attributes :conference_id

  has_one :primary_leader, serializer: UserBaseSerializer
  has_one :secondary_leader, serializer: UserBaseSerializer

end
