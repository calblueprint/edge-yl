class Api::GroupsController < Api::BaseController

  def create
    group = Group.new group_params
    if group.save
      render json: group,
             serializer: GroupIndexSerializer,
             status: :created
    else
      unprocessable_response group
    end
  end

  def show
    group = Group.includes(:conference,
                           leaderships: :user,
                           students: :school).find params[:id]
    current_user.create_visit('Group', params[:id].to_i)
    render json: group, serializer: GroupShowSerializer
  end

  def update
    group = Group.includes(:conference, students: :school).find params[:id]
    if group.update_attributes group_params
      render json: group,
                   serializer: GroupShowSerializer,
                   status: :created
    else
      unprocessable_response group
    end
  end

  private

  def group_params
    params.require(:group).permit(
      :conference_id,
      :letter,
    )
  end

end

