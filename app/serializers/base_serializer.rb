class BaseSerializer < ActiveModel::Serializer

  def root_name
    object.class.name.underscore
  end

end
