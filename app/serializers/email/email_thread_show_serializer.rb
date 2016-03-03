class EmailThreadShowSerializer < EmailThreadIndexSerializer

  has_many :emails, serializer: EmailShowSerializer

end
