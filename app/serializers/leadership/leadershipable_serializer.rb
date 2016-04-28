class LeadershipableSerializer < BaseSerializer

  attributes :id,
             :full_name

  def visits
    object.visits.first(3)
  end

end
