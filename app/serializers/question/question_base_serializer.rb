class QuestionBaseSerializer < BaseSerializer

  attributes :id, :is_required, :key, :options, :placeholder,
             :section_id, :style, :title

end
