class Api::GroupsController < Api::BaseController

  def create
    group = Group.new group_params
    if group.save
      render json: group, serializer: GroupBaseSerializer
    end
  end

  def index
    groups = Group.all
    render json: groups, each_serializer: GroupIndexSerializer
  end

  def show
    group = Group.find params[:id]
    render json: group, serializer: GroupIndexSerializer
  end

  private

  def group_params
    params.require(:group).permit(
      :id,
      :name,
      :conference_id,
    )
  end

end
