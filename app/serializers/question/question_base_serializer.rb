class QuestionBaseSerializer < BaseSerializer

  attributes :id,
             :is_required,
             :key,
             :options,
             :page_id,
             :placeholder,
             :style,
             :title

end
