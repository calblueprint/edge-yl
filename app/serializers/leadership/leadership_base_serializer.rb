class LeadershipBaseSerializer < BaseSerializer

  attributes :id,
             :style,
             :volunteer_id

  has_one :group, serializer: GroupBaseSerializer

end
