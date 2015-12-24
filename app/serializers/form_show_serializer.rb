class FormShowSerializer < FormIndexSerializer

  attributes :target

  has_many :sections, serializer: SectionBaseSerializer

end
