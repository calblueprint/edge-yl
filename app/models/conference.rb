# == Schema Information
#
# Table name: conferences
#
#  id         :integer          not null, primary key
#  end_date   :date             not null
#  location   :string           not null
#  name       :string           not null
#  start_date :date             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Conference < ActiveRecord::Base

  self.default_scope { order('created_at DESC') }

  has_many :groups, dependent: :destroy
  has_many :rooms, dependent: :destroy
  has_many :students

  validates :end_date, presence: true
  validates :location, presence: true
  validates :name, presence: true
  validates :start_date, presence: true

  # Assigns all students of a conference into the conference's groups
  # evenly, students from each gender are assigned to a group one at a time
  # to spread out the gender.
  def assign_students_to_groups
    group_ids = groups.map {|group| group.id}
    gender_groups = [students.male, students.female, students.other]
    assigned_student_count = 0
    mod_to_group_index = lambda { |index| index % group_ids.length }

    gender_groups.each do |gender|
      gender.each do |student|
        student.group_id = group_ids[mod_to_group_index.call(assigned_student_count)]
        student.save
        assigned_student_count += 1
      end
    end
    self
  end

  def females_count
    students.female.count
  end

  def groups_count
    groups.count
  end

  def males_count
    students.male.count
  end

  def rooms_count
    rooms.count
  end

end
