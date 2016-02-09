class DraftIndexSerializer < DraftBaseSerializer

  attributes :content, :created_at, :from, :sender,
             :subject, :recipient, :to

end
