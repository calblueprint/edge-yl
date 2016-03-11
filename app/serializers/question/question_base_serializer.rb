class QuestionBaseSerializer < BaseSerializer

  attributes :id,
             :format,
             :is_required,
             :key,
             :options,
             :page_id,
             :placeholder,
             :style,
             :title

end
