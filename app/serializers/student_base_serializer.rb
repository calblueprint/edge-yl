class StudentBaseSerializer < BaseSerializer

  attributes :id, :birthday, :email,
             :first_name, :last_name, :home_address, :is_flagged, :is_primary

end
