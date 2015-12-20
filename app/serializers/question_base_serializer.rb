class QuestionBaseSerializer < BaseSerializer

  attributes :id, :is_required, :key, :placeholder,
             :section_id, :style, :title

end
