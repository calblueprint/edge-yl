class SearchableBaseSerializer < BaseSerializer

  attributes :id,
             :content,
             :searchable_id,
             :searchable_type

  def searchable_id
    if searchable_type == 'Email'
      Email.find(object.searchable_id).email_thread.id
    else
      object.searchable_id
    end
  end

end
