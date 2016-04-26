class QuestionBaseSerializer < BaseSerializer

  attributes :id,
             :description,
             :enabler_key,
             :enabler_value,
             :format,
             :is_required,
             :key,
             :options,
             :page_id,
             :placeholder,
             :style,
             :title
             :value

end
