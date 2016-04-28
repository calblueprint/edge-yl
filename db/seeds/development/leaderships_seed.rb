def assign_leadership(leadership_id, user_id)
  leadership = Leadership.find(leadership_id)
  user = User.find(user_id)
  leadership.leadershipable_id = user.id
  leadership.leadershipable_type = 'User'
  leadership.save
  group = leadership.group
  puts "Assigned leadership of #{group.full_name} to #{user.full_name}."
end

(1..4).each do |index|
  assign_leadership(index, index)
end
