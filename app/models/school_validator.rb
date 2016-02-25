class SchoolValidator

  extend ActiveModel::Naming

  include ActiveModel::Conversion
  include ActiveModel::Validations

  attr_accessor :address_city, :address_one, :address_state,
                :address_zip, :name


  validates :address_city, if: :page_one?, presence: true
  validates :address_one, if: :page_one?, presence: true
  validates :address_state, if: :page_one?, presence: true
  validates :address_zip, if: :page_one?, presence: true
  validates :name, if: :page_one?, presence: true

  def initialize(attributes={}, page=0)
    @page = page
    attributes.each do |name, value|
      send("#{name}=", value)
    end
  end

  private

  def page_one?
    @page == 1
  end

  def persisted?
    false
  end

end
