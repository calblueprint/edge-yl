class RoomBaseSerializer < BaseSerializer

  attributes :id,
             :available_capacity_count,
             :building,
             :capacity,
             :conference_id,
             :gender,
             :number

end
