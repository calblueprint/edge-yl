class StudentShowSerializer < StudentIndexSerializer

  attributes :address_city,
             :address_one,
             :address_state,
             :address_two,
             :address_zip,
             :birthday,
             :first_name,
             :gender,
             :gender_choices,
             :guardian_email,
             :guardian_employer,
             :guardian_first_name,
             :guardian_job_title,
             :guardian_last_name,
             :guardian_phone_number,
             :guardian_phone_type,
             :guardian_relationship,
             :home_phone,
             :last_name,
             :preferred_name,
             :shirt_size,
             :shirt_sizes

  has_many :comments, serializer: CommentBaseSerializer

  def gender_choices
    Student.genders.keys
  end

  def shirt_sizes
    Student.shirt_sizes.keys
  end

end
