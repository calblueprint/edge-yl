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

