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
             :guardian_one_email,
             :guardian_one_employer,
             :guardian_one_first_name,
             :guardian_one_job_title,
             :guardian_one_last_name,
             :guardian_one_phone_number,
             :guardian_one_phone_type,
             :guardian_one_relationship,
             :guardian_two_email,
             :guardian_two_employer,
             :guardian_two_first_name,
             :guardian_two_job_title,
             :guardian_two_last_name,
             :guardian_two_phone_number,
             :guardian_two_phone_type,
             :guardian_two_relationship,
             :home_phone,
             :is_checked_in,
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
