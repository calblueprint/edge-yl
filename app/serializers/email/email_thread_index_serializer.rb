class EmailThreadIndexSerializer < EmailThreadBaseSerializer

  attributes :content,
             :created_at,
             :emailable_id,
             :emailable_name,
             :emailable_type,
             :emails_count,
             :is_unread,
             :subject

end
