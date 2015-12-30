class Api::GroupsController < Api::BaseController

  def create
    group = Group.new group_params
    if group.save
      render json: group, serializer: GroupBaseSerializer
    else
      unprocessable_response group
    end
  end

  def show
    group = Group.includes(:conference, students: :school).find params[:id]
    render json: group, serializer: GroupShowSerializer
  end

  def update
    group = Group.includes(:conference, students: :school).find params[:id]
    if group.update_attributes group_params
      render json: group,
                   serializer: GroupShowSerializer,
                   status: 201
  end

  private

  def group_params
    params.require(:group).permit(
      :id,
      :letter,
    )
  end

end

