class EmailIndexSerializer < EmailBaseSerializer

  attributes :content, :created_at, :from, :sender,
             :subject, :recipient, :to

end
