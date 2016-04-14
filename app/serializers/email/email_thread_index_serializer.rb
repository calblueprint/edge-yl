class EmailThreadIndexSerializer < EmailThreadBaseSerializer

  attributes :content_preview,
             :created_at,
             :emailable_id,
             :emailable_name,
             :emailable_type,
             :emails_count,
             :is_unread,
             :subject

  def content_preview
    cutoff = 200
    if object.content.length > cutoff
      "#{object.content.slice(0, cutoff)}..."
    else
      object.content
    end
  end

end
