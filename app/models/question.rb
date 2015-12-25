# == Schema Information
#
# Table name: questions
#
#  id          :integer          not null, primary key
#  is_required :boolean          not null
#  key         :string           not null
#  options     :string           default([]), not null, is an Array
#  placeholder :string           default(""), not null
#  style       :integer          not null
#  title       :string           not null
#  section_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Question < ActiveRecord::Base

  enum style: [:dropdown, :input, :textarea]

  belongs_to :section

  validates_presence_of :key, :style, :title
  validates_presence_of :placeholder, if: :is_input?

  validates_absence_of :placeholder, if: :is_dropdown?
  validates_inclusion_of :is_required, in: [true, false]
  validates_length_of :options, minimum: 2, if: :is_dropdown?

  def is_dropdown?
    style == Question.styles[:dropdown]
  end

  def is_input?
    style == Question.styles[:input]
  end

end
