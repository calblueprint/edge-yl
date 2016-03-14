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
#  title        :string           default("")
#  school_id    :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Contact < ActiveRecord::Base

  after_create :promote

  belongs_to :school

  has_many :emails, dependent: :destroy, as: :emailable

  validates :email, presence: true
  validates :first_name, presence: true
  validates :is_primary, inclusion: { in: [true, false] }
  validates :last_name, presence: true
  validates :phone_number, presence: true

  def full_name
    "#{first_name} #{last_name}"
  end

  def promote
    self.is_primary = true
    all_contacts = Contact.where(school_id: school_id)
    other_contacts = all_contacts.where.not(id: id)
    other_contacts.each do |other_contact|
      if other_contact[:is_primary]
        other_contact.update_attributes(is_primary: false)
      end
    end
    self.save
  end

end
