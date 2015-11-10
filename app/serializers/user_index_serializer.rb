class UserIndexSerializer < BaseSerializer

  attributes :id, :first_name, :last_name, :birthday, :is_admin, :created_at

  has_many :comments

end
