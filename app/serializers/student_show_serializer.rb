class StudentShowSerializer < StudentIndexSerializer

  attributes :address_city, :address_one, :address_state,
             :address_two, :address_zip, :birthday, :first_name,
             :gender, :guardian_email, :guardian_employer,
             :guardian_first_name, :guardian_job_title,
             :guardian_last_name, :guardian_phone_number,
             :guardian_phone_type, :guardian_relationship,
             :home_phone, :last_name, :preferred_name, :shirt_size

  has_many :comments, serializer: CommentBaseSerializer

end
