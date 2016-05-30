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

  default_scope { order('created_at DESC') }

  has_many :groups, dependent: :destroy
  has_many :responsibilities, dependent: :destroy
  has_many :rooms, dependent: :destroy
  has_many :students
  has_many :volunteers

  validates :end_date, presence: true
  validates :location, presence: true
  validates :name, presence: true
  validates :start_date, presence: true

  after_create :create_responsibilities

  def self.active
    active_conferences = []
    all.each { |conference| active_conferences << conference if conference.active }
    active_conferences
  end

  # Assigns all students of a conference into the conference's groups
  # evenly, students from each gender are assigned to a group one at a time
  # to spread out the gender.
  def assign_students_to_groups
    group_ids = groups.map(&:id)
    gender_groups = [students.male, students.female, students.other]
    assigned_student_count = 0
    mod_to_group_index = -> (index) { index % group_ids.length }

    gender_groups.each do |gender|
      gender.each do |student|
        student.group_id = group_ids[mod_to_group_index.call(assigned_student_count)]
        student.save
        assigned_student_count += 1
      end
    end
    self
  end

  # Randomizes the male, female, and other students before attempting
  # to assign them to rooms. If there is insufficient space to place all
  # students, then an error is thrown.
  def assign_students_to_rooms
    unassigned_males = students.male.shuffle
    unassigned_females = students.female.shuffle

    students.each { |student| student.room = nil }

    rooms.each do |room|
      while room.students.count < room.capacity
        if !unassigned_males.empty? && room.male?
          student = unassigned_males.pop
        elsif !unassigned_females.empty? && room.female?
          student = unassigned_females.pop
        else # There are no more students to assign to this room
          break
        end
        student.room = room
        student.save
      end
    end
    unless unassigned_females.empty? && unassigned_males.empty?
      fail 'Not enough room space to accomodate students'
    end
    self
  end

  def active
    end_date.tomorrow.future?
  end

  def checked_in_counts
    {
      females: students.female.is_checked_in(1).count,
      males: students.male.is_checked_in(1).count,
      others: students.other.is_checked_in(1).count,
      total: students.is_checked_in(1).count,
    }
  end

  def create_responsibilities
    School.all.each do |school|
      Responsibility.create(conference: self, school: school)
    end
  end

  # Generates groups_count number of empty groups for a conference.
  def generate_groups(groups_count)
    (1..groups_count).each do |letter|
      Group.create(conference_id: id)
    end
  end

  def groups_count
    groups.count
  end

  def next_letter
    used_letters = self.used_letters
    ('A'..'Z').select { |letter| !used_letters.include? letter }.first
  end

  def rooms_count
    rooms.count
  end

  def students_counts
    {
      females: students.female.count,
      males: students.male.count,
      others: students.other.count,
      total: students.count,
    }
  end

  def groupless_students_count
    students.where(group_id: nil).count
  end

  def roomless_students_count
    students.where(room_id: nil).count
  end

  def used_letters
    groups.map(&:letter)
  end

end
