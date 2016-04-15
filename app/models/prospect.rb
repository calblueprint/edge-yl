# == Schema Information
#
# Table name: prospects
#
#  id                 :integer          not null, primary key
#  contact_email      :string           not null
#  contact_first_name :string           not null
#  contact_last_name  :string           not null
#  contact_phone      :string           not null
#  name               :string           not null
#  priority           :integer          not null
#  website            :string           default(""), not null
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#

class Prospect < ActiveRecord::Base

  has_many :comments, as: :commentable, dependent: :destroy

  validates :contact_email, presence: true
  validates :contact_first_name, presence: true
  validates :contact_last_name, presence: true
  validates :contact_phone, presence: true
  validates :name, presence: true
  validates :priority, presence: true

  def self.to_csv
    attributes = Prospect.attribute_names
    CSV.generate(headers: true) do |csv|
      csv << attributes
      all.find_each do |prospect|
        csv << attributes.map { |attr| prospect.send(attr) }
      end
    end
  end

end
