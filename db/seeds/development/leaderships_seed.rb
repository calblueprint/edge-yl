def generate_leadership(is_primary, group_id, user_id)
  group = Group.find(group_id)
  user = User.find(user_id)
  new_leadership = Leadership.create(
    is_primary: is_primary,
    group: group,
    user: user,
  )
  puts "Created leadership of #{group.full_name} for #{user.full_name}."
end

generate_leadership(true, 1, 1)
generate_leadership(false, 1, 2)
generate_leadership(true, 2, 3)
generate_leadership(false, 2, 4)

