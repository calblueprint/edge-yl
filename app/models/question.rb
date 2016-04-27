# == Schema Information
#
# Table name: questions
#
#  id            :integer          not null, primary key
#  description   :string           default(""), not null
#  enabler_key   :string
#  enabler_values :string
#  format        :integer          not null
#  is_required   :boolean          default(TRUE), not null
#  key           :string           not null
#  options       :string           default([]), not null, is an Array
#  placeholder   :string           default(""), not null
#  style         :integer          not null
#  title         :string           not null
#  page_id       :integer
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Question < ActiveRecord::Base

  before_validation :set_initials, on: :create

  enum format: [:date, :text, :time]
  enum style: [
    :checkbox,
    :dropdown,
    :information,
    :input,
    :textarea,
    :waiver,
  ]

  belongs_to :page

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

  private

  def set_initials
    self.format ||= Question.formats[:text]
  end

end
