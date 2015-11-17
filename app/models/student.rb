# == Schema Information
#
# Table name: students
#
#  id           :integer          not null, primary key
#  birthday     :date             not null
#  cell_phone   :string           not null
#  email        :string           not null
#  first_name   :string           not null
#  home_address :string           not null
#  home_phone   :string           not null
#  last_name    :string           not null
#  school_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Student < ActiveRecord::Base

  belongs_to :school

  has_many :comments, dependent: :destroy

  validates :cell_phone, presence: true
  validates :email, presence: true
  validates :first_name, presence: true
  validates :home_address, presence: true
  validates :last_name, presence: true
  
  

  def full_name
    '#{first_name} #{last_name}'
  end

end
