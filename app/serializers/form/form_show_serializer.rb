class FormShowSerializer < FormIndexSerializer

  attributes :target

  has_many :pages, serializer: PageBaseSerializer

end
