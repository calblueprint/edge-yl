  class GroupStudentSerializer < GroupBaseSerializer

  has_one :conference, serializer: ConferenceBaseSerializer

end
