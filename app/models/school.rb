# == Schema Information
#
# Table name: schools
#
#  id                   :integer          not null, primary key
#  address_city         :string           not null
#  address_one          :string           not null
#  address_state        :string           not null
#  address_two          :string           default(""), not null
#  address_zip          :string           not null
#  contact_email        :string           not null
#  contact_first_name   :string           not null
#  contact_last_name    :string           not null
#  contact_phone_number :string           not null
#  contact_title        :string           not null
#  name                 :string           not null
#  website              :string           default(""), not null
#  created_at           :datetime         not null
#  updated_at           :datetime         not null
#

class School < ActiveRecord::Base

  include PgSearch
  multisearchable against: [:name]

  has_many :comments, as: :commentable, dependent: :destroy
  has_many :students
  has_many :visits, dependent: :destroy, as: :visitable

  validates :address_city, presence: true
  validates :address_one, presence: true
  validates :address_state, presence: true
  validates :address_zip, presence: true
  validates :contact_email, presence: true
  validates :contact_first_name, presence: true
  validates :contact_last_name, presence: true
  validates :contact_phone_number, presence: true
  validates :contact_title, presence: true
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

end

