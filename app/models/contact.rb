# == Schema Information
#
# Table name: contacts
#
#  id           :integer          not null, primary key
#  email        :string           not null
#  first_name   :string           not null
#  is_primary   :boolean          default(FALSE), not null
#  last_name    :string           not null
#  phone_number :string           not null
#  title        :string           not null
#  school_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Contact < ActiveRecord::Base

  belongs_to :school

  validates :email, presence: true
  validates :first_name, presence: true
  validates :is_primary, inclusion: { in: [true, false] }
  validates :last_name, presence: true
  validates :phone_number, presence: true
  validates :title, presence: true

end
