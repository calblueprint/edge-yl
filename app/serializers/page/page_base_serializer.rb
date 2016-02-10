class PageBaseSerializer < BaseSerializer

  attributes :id, :title

  has_many :sections, serializer: SectionBaseSerializer

end
