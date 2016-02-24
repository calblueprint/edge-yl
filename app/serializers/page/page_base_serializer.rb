class PageBaseSerializer < BaseSerializer

  attributes :id, :is_last, :number, :title, :description

  has_many :questions, serializer: QuestionBaseSerializer

end
