class PageBaseSerializer < BaseSerializer

  attributes :id, :is_last, :number, :title

  has_many :questions, serializer: QuestionBaseSerializer

end
