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
  has_many :responsibilities, dependent: :destroy
  has_many :visits, dependent: :destroy

  has_one :leadership, dependent: :destroy

  validates_presence_of :email, :first_name, :last_name

  validates_inclusion_of :has_sidebar, :is_admin, in: [true, false]

  def self.groupable
    self.includes(:leadership).where(leaderships: { id: nil })
  end

  def full_name
    "#{first_name} #{last_name}"
  end

  def create_visit(visitable_type, visitable_id)
    last_visit = visits.first
    if last_visit.nil? ||
       last_visit.visitable_type != visitable_type ||
       last_visit.visitable_id != visitable_id
      visits.create visitable_id: visitable_id, visitable_type: visitable_type
    end
  end

end
