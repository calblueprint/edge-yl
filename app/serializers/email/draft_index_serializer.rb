class DraftIndexSerializer < DraftBaseSerializer

  attributes :content, :created_at, :from, :is_draft,
             :sender, :subject, :recipient, :to

end
