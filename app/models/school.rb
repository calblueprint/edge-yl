# == Schema Information
#
# Table name: schools
#
#  id            :integer          not null, primary key
#  address_city  :string           not null
#  address_one   :string           not null
#  address_state :string           not null
#  address_two   :string           default(""), not null
#  address_zip   :string           not null
#  name          :string           not null
#  website       :string           default(""), not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class School < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:name]

  has_many :comments, as: :commentable, dependent: :destroy
  has_many :contacts, dependent: :destroy
  has_many :emails, dependent: :destroy, as: :emailable
  has_many :students
  has_many :visits, dependent: :destroy, as: :visitable

  validates :address_city, presence: true
  validates :address_one, presence: true
  validates :address_state, presence: true
  validates :address_zip, presence: true
  validates :name, presence: true

  def self.to_csv
    attributes = School.attribute_names
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |school|
        csv << attributes.map{ |attr| school.send(attr) }
      end
    end
  end

  def full_name
    name
  end

  def primary_contact
    contacts.where(is_primary: true).first
  end

  def secondary_contacts
    contacts.where(is_primary: false)
  end

end

