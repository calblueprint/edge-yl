class LeadershipBaseSerializer < BaseSerializer

  attributes :id,
             :style

  has_one :group, serializer: GroupBaseSerializer

end
