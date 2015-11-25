class VisitBaseSerializer < BaseSerializer

  attributes :id, :visitable_id, :visitable_name, :visitable_type

  def visitable_name
    object.visitable.name
  end

end

