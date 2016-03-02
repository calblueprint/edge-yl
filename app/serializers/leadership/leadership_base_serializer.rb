class LeadershipBaseSerializer < BaseSerializer

  attributes :id,
             :style

  has_one :group, serializer: GroupBaseSerializer

  def style
    object.style.humanize
  end

end
