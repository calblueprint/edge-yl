# == Schema Information
#
# Table name: users
#
#  id                     :integer          not null, primary key
#  confirmation_token     :string
#  confirmed_at           :datetime
#  confirmation_sent_at   :datetime
#  current_sign_in_at     :datetime
#  current_sign_in_ip     :inet
#  email                  :string           default(""), not null
#  encrypted_password     :string           default(""), not null
#  first_name             :string           not null
#  has_sidebar            :boolean          default(TRUE), not null
#  is_admin               :boolean          default(FALSE), not null
#  last_name              :string           not null
#  last_sign_in_at        :datetime
#  last_sign_in_ip        :inet
#  remember_created_at    :datetime
#  reset_password_token   :string
#  reset_password_sent_at :datetime
#  sign_in_count          :integer          default(0), not null
#  created_at             :datetime         not null
#  updated_at             :datetime         not null
#

class User < ActiveRecord::Base

  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :confirmable, :database_authenticatable, :recoverable,
         :registerable, :rememberable, :trackable, :validatable

  has_many :comments, dependent: :destroy
  has_many :emails, dependent: :destroy
  has_many :email_threads, dependent: :destroy
  has_many :responsibilities
  has_many :visits, dependent: :destroy

  has_one :leadership, dependent: :destroy

  validates :email, presence: true
  validates :first_name, presence: true
  validates :last_name, presence: true

  validates :has_sidebar, inclusion: { in: [true, false] }
  validates :is_admin, inclusion: { in: [true, false] }

  def create_visit(visitable_type, visitable_id)
    last_visit = visits.first
    new_visit = Visit.new(
      user_id: id,
      visitable_id: visitable_id,
      visitable_type: visitable_type,
    )
    new_visit.save unless new_visit.equals(last_visit)
  end

  def drafts
    emails.where(is_draft: false)
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def self.groupable
    includes(:leadership).where(leaderships: { id: nil })
  end

  def self.schoolable
    includes(:responsibilities).where(responsibilities: { user_id: nil })
  end

  def username
    "#{first_name}#{last_name}".downcase
  end

  def unread_count
    emails.where(is_unread: :true).count
  end

end
