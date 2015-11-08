class BaseStudentSerializer < BaseSerializer
  attributes :id, :birthday, :cell_phone, :email,
             :first_name, :last_name, :home_address

  has_one :school, serializer: BaseSchoolSerializer

end
