class GroupIndexSerializer < GroupBaseSerializer

  has_many :students, serializer: StudentBaseSerializer

end
