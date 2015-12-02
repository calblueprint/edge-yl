class PaginatedSerializer < ActiveModel::ArraySerializer

  def initialize(object, options={})
    options[:meta] ||= {}
    options[:meta][:pagination] = {
      current: object.current_page,
      limit: object.total_pages,
    }
    super(object, options)
  end

end
