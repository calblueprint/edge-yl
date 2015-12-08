class StudentBaseSerializer < BaseSerializer

  attributes :id, :birthday, :email,
             :first_name, :gender, :last_name, :home_address, :preferred_name, :shirt_size

end
