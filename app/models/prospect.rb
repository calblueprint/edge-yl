# == Schema Information
#
# Table name: prospects
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  contact_email      :string           not null
#  contact_first_name :string           not null
#  contact_last_name  :string           not null
#  website            :string           default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Prospect < ActiveRecord::Base

  validates :contact_email, presence: true
  validates :contact_first_name, presence: true
  validates :contact_last_name, presence: true
  validates :name, presence: true

end
