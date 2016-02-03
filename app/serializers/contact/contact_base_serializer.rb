class ContactBaseSerializer < BaseSerializer

  attributes :id, :email, :first_name, :is_primary,
             :last_name, :phone_number, :title

end
