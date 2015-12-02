class FormShowSerializer < FormIndexSerializer

  has_many :sections, serializer: SectionBaseSerializer

end
