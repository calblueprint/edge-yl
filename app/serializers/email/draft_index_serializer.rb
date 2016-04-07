class DraftIndexSerializer < DraftBaseSerializer

  attributes :content,
             :from,
             :is_draft,
             :sender,
             :subject,
             :recipient,
             :to,
             :updated_at

  def updated_at
    object.updated_at.strftime('%-I:%M:%S %p')
  end

end
