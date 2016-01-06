class LeadershipBaseSerializer < BaseSerializer

  attributes :id, :style

  def style
    object.style.humanize
  end

end
