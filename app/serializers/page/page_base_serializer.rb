class PageBaseSerializer < BaseSerializer

  attributes :id, :number, :title

  has_many :questions, serializer: QuestionBaseSerializer

end
