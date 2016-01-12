class SectionBaseSerializer < BaseSerializer

  attributes :id, :title

  has_many :questions, serializer: QuestionBaseSerializer

end
