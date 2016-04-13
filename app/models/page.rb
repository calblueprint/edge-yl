# == Schema Information
#
# Table name: pages
#
#  id          :integer          not null, primary key
#  description :text             not null
#  is_last     :boolean          default(FALSE), not null
#  number      :integer          not null
#  title       :string           not null
#  form_id     :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Page < ActiveRecord::Base

  default_scope { order('number ASC') }

  belongs_to :form

  has_many :questions, dependent: :destroy

end
