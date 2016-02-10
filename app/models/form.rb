# == Schema Information
#
# Table name: forms
#
#  id         :integer          not null, primary key
#  target     :integer          not null
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Form < ActiveRecord::Base

  enum target: [:school, :student]

  has_many :pages, dependent: :destroy
  has_many :questions, through: :sections

end
