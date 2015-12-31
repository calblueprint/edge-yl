class StudentIndexSerializer < StudentBaseSerializer

  attributes :cell_phone, :email, :is_flagged,
             :is_primary, :registration_status

  has_one :group, serializer: GroupBaseSerializer
  has_one :school, serializer: SchoolBaseSerializer

  def registration_status
    object.registration_status.humanize
  end

end
