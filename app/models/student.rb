# == Schema Information
#
# Table name: students
#
#  id                  :integer          not null, primary key
#  address_city        :string           not null
#  address_one         :string           not null
#  address_state       :string           not null
#  address_two         :string           not null
#  address_zip         :string           not null
#  birthday            :date             not null
#  gender              :integer          not null
#  registration_status :integer          not null
#  shirt_size          :integer          not null
#  cell_phone          :string           not null
#  email               :string           not null
#  first_name          :string           not null
#  preferred_name      :string           not null
#  guardian_one_name   :string           not null
#  guardian_one_phone  :string           not null
#  guardian_one_email  :string           not null
#  guardian_two_name   :string           not null
#  guardian_two_phone  :string           not null
#  guardian_two_email  :string           not null
#  home_phone          :string           not null
#  is_flagged          :boolean          not null
#  is_primary          :boolean          not null
#  last_name           :string           not null
#  group_id            :integer
#  school_id           :integer
#  created_at          :datetime         not null
#  updated_at          :datetime         not null
#

class Student < ActiveRecord::Base

  include PgSearch

  multisearchable against: [:first_name, :last_name, :email]

  belongs_to :group
  belongs_to :school

  enum gender: [:female, :male, :other]
  enum registration_status: [:selected, :registered, :dropped]
  enum shirt_size: [:S, :L, :M, :Other, :XL, :XXL]

  has_many :comments, dependent: :destroy
  has_many :visits, dependent: :destroy, as: :visitable

  has_one :conference, through: :group
  has_one :responsibility, dependent: :destroy

  accepts_nested_attributes_for :responsibility

  validates :address_city, presence: true
  validates :address_one, presence: true
  validates :address_state, presence: true
  validates :address_zip, presence: true
  validates :birthday, presence: true
  validates :cell_phone, presence: true
  validates :email, presence: true
  validates :first_name, presence: true
  validates :gender, presence: true
  validates :guardian_one_name, presence: true
  validates :guardian_one_phone, presence: true
  validates :guardian_one_email, presence: true
  validates :guardian_two_name, presence: true
  validates :guardian_two_phone, presence: true
  validates :guardian_two_email, presence: true
  validates :home_phone, presence: true
  validates :is_flagged, presence: true
  validates :is_primary, presence: true
  validates :last_name, presence: true
  validates :preferred_name, presence: true

  def self.to_csv
    attributes = %w{first_name last_name birthday email}
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.each do |student|
        csv << attributes.map{ |attr| student.send(attr) }
      end
    end
  end

  def name
    "#{first_name} #{last_name}"
  end

end
