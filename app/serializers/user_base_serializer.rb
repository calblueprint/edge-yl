class UserBaseSerializer < BaseSerializer

  attributes :id, :email, :first_name, :is_admin, :last_name

  has_many :visits, serializer: VisitBaseSerializer

  def visits
    object.visits.first(3)
  end

end

