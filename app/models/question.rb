# == Schema Information
#
# Table name: questions
#
#  id          :integer          not null, primary key
#  key         :string           not null
#  is_required :boolean          not null
#  placeholder :string           not null
#  style       :integer          not null
#  title       :string           not null
#  section_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Question < ActiveRecord::Base

  enum style: [:dropdown, :input, :textarea]

  belongs_to :section

end
