class VolunteerShowSerializer < VolunteerIndexSerializer

  attributes :first_name,
             :last_name

  has_one :leadership, serializer: LeadershipBaseSerializer

end
