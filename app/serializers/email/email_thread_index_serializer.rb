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
    content = object.emails.last.content
    if content.length > cutoff
      "#{content.slice(0, cutoff)}..."
    else
      content
    end
  end

  def updated_at
    object.emails.where(is_draft: false).last.updated_at.strftime('%D %-I:%M:%S %p')
  end

end
