# == Schema Information
#
# Table name: questions
#
#  id             :integer          not null, primary key
#  description    :string           default(""), not null
#  enabler_key    :string
#  enabler_values :string
#  format         :integer          not null
#  is_required    :boolean          default(TRUE), not null
#  key            :string           not null
#  options        :string           default([]), not null, is an Array
#  placeholder    :string           default(""), not null
#  style          :integer          not null
#  title          :string           not null
#  page_id        :integer
#  created_at     :datetime         not null
#  updated_at     :datetime         not null
#

require 'rails_helper'

RSpec.describe Question, type: :model do
  pending 'add some examples to (or delete) #{__FILE__}'
end
