class UserBaseSerializer < BaseSerializer

  attributes :id, :email, :first_name, :has_sidebar, :is_admin, :last_name

  def visits
    object.visits.first(3)
  end

end
