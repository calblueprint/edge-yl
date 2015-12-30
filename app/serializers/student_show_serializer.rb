class StudentShowSerializer < StudentIndexSerializer

  attributes :address_city, :address_one, :address_state,
             :address_two, :address_zip, :birthday, :first_name,
             :gender, :guardian_email, :guardian_employer,
             :guardian_first_name, :guardian_job_title,
             :guardian_last_name, :guardian_phone_number,
             :guardian_phone_type, :guardian_relationship,
             :home_phone, :last_name, :preferred_name, :shirt_size

  has_many :comments, serializer: CommentBaseSerializer

  def gender
    object.gender.humanize
  end

  def guardian_phone_type
    object.guardian_phone_type.humanize
  end

  def guardian_relationship
    object.guardian_relationship.humanize
  end

  def shirt_size
    object.shirt_size.humanize
  end

end
