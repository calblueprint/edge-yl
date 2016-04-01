class QuestionBaseSerializer < BaseSerializer

  attributes :id,
  			 :description,
             :format,
             :is_required,
             :key,
             :options,
             :page_id,
             :placeholder,
             :style,
             :title

end
