# == Schema Information
#
# Table name: sections
#
#  id         :integer          not null, primary key
#  title      :string           not null
#  page_id    :integer
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Section < ActiveRecord::Base

	belongs_to :page

  has_many :questions, dependent: :destroy

end
