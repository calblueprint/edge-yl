class EmailThreadIndexSerializer < EmailThreadBaseSerializer

  attributes :content_preview,
             :emailable_id,
             :emailable_name,
             :emailable_type,
             :emails_count,
             :is_unread,
             :subject,
             :updated_at

  def content_preview
    cutoff = 200
    if object.content.length > cutoff
      "#{object.content.slice(0, cutoff)}..."
    else
      object.content
    end
  end

  def updated_at
    object.emails.last.updated_at.strftime('%D %-I:%M:%S %p')
  end

end
