# == Schema Information
#
# Table name: questions
#
#  id          :integer          not null, primary key
#  is_required :boolean          default(TRUE), not null
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

  validates :key, presence: true
  validates :style, presence: true
  validates :title, presence: true
  validates :is_required, inclusion: { in: [false, true] }
  validates :options, length: { minimum: 2, if: :is_dropdown? }
  validates :placeholder, presence: true, if: :is_input?
  validates :placeholder, absence: true, if: :is_dropdown?

  def is_dropdown?
    style == Question.styles[:dropdown]
  end

  def is_input?
    style == Question.styles[:input]
  end

end
