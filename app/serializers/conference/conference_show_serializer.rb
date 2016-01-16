class ConferenceShowSerializer < ConferenceIndexSerializer

  attributes :groups_count

  has_many :groups, serializer: GroupIndexSerializer

  def groups_count
    object.groups.count
  end

end
