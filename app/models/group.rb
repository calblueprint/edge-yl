class Group < ActiveRecord::Base
  belongs_to :conference

  has_many :students
end
