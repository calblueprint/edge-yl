class EmailIndexSerializer < EmailBaseSerializer

  attributes :content, :created_at, :emailable_id, :emailable_type,
             :from, :sender, :subject, :recipient, :to

end
