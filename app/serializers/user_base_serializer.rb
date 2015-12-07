class UserBaseSerializer < BaseSerializer

  attributes :id, :email, :has_sidebar, :first_name, :is_admin, :last_name

  def visits
    object.visits.first(3)
  end

end
