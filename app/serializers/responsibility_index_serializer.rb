class ResponsibilityIndexSerializer < ResponsibilityBaseSerializer

  has_one :student, serializer: StudentBaseSerializer

end
