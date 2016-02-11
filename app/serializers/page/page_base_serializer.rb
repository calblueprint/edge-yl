class PageBaseSerializer < BaseSerializer

  attributes :id, :title

  has_many :questions, serializer: QuestionBaseSerializer

end
