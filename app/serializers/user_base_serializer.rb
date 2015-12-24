class UserBaseSerializer < BaseSerializer

  attributes :id, :first_name, :last_name

  def visits
    object.visits.first(3)
  end

end
