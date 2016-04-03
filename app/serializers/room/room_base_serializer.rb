class RoomBaseSerializer < BaseSerializer

  attributes :id,
             :available_capacity_count,
             :building,
             :capacity,
             :conference_id,
             :full_name,
             :gender,
             :number

end
