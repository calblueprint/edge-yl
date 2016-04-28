class LeadershipBaseSerializer < BaseSerializer

  attributes :id,
             :leadershipable_id,
             :leadershipable_type,
             :style

  has_one :group, serializer: GroupBaseSerializer

end
