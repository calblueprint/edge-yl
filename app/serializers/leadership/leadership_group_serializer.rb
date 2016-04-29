class LeadershipGroupSerializer < LeadershipBaseSerializer

  has_one :volunteer, serializer: VolunteerBaseSerializer

end
