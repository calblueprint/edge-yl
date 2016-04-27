class QuestionBaseSerializer < BaseSerializer

  attributes :id,
             :description,
             :enabler_key,
             :enabler_values,
             :format,
             :is_required,
             :key,
             :options,
             :page_id,
             :placeholder,
             :style,
             :title

end
