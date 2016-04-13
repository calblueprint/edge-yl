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
    object.updated_at.strftime('%b %e, %Y %-I:%M:%S %p')
  end

end
