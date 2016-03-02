class PageBaseSerializer < BaseSerializer

  attributes :id,
             :description,
             :is_last,
             :number,
             :title

  has_many :questions, serializer: QuestionBaseSerializer

end
