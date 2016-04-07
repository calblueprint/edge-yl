class EmailThreadIndexSerializer < EmailThreadBaseSerializer

  attributes :content,
             :created_at,
             :is_unread,
             :subject

  has_many :emails, serializer: EmailNameSerializer

end
