class StudentValidator

  extend ActiveModel::Naming

  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :first_name, :last_name

  validates :first_name, if: :page_one?, presence: true
  validates :last_name, if: :page_one?, presence: true

  def initialize(attributes={}, page=1)
    @page = page
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  def page_one?
    @page == 1
  end

  def persisted?
    false
  end

end
