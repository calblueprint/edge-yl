class EmailNameSerializer < EmailBaseSerializer

  attributes :emailable_id,
             :emailable_name,
             :emailable_type,
             :sender

end
