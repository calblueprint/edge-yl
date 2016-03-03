class EmailThreadIndexSerializer < EmailThreadBaseSerializer

  attributes :content,
             :created_at,
             :subject

  has_many :emails, serializer: EmailNameSerializer

end
