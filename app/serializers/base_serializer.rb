class BaseSerializer < ActiveModel::Serializer

  def initialize(object, options={})
    options[:root] = object.class.name.underscore
    super(object, options)
  end

end
