def assign_leadership(leadership_id, volunteer_id)
  leadership = Leadership.find(leadership_id)
  volunteer = Volunteer.find(volunteer_id)
  leadership.volunteer = volunteer
  leadership.save
  group = leadership.group
  puts "Assigned leadership of #{group.full_name} to #{volunteer.full_name}."
end

(1..4).each do |index|
  assign_leadership(index, index)
end
