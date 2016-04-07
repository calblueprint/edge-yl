class EmailIndexSerializer < EmailBaseSerializer

  attributes :content,
             :emailable_id,
             :emailable_type,
             :from,
             :sender,
             :subject,
             :recipient,
             :to,
             :updated_at

  def updated_at
    object.updated_at.to_formatted_s(:long_ordinal)
  end

end
