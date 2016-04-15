# == Schema Information
#
# Table name: emails
#
#  id              :integer          not null, primary key
#  content         :string           not null
#  from            :string           not null
#  is_draft        :boolean          default(FALSE), not null
#  is_sent         :boolean          default(FALSE), not null
#  is_unread       :boolean          default(TRUE), not null
#  sender          :string           not null
#  subject         :string           not null
#  recipient       :string           not null
#  to              :string           not null
#  email_thread_id :integer
#  emailable_id    :integer
#  emailable_type  :string
#  user_id         :integer
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

FactoryGirl.define do
  factory :email do
    from   { '' }
    sender { '' }
  end
end
