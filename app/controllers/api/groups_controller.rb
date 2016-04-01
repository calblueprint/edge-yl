class Api::GroupsController < Api::BaseController

  has_scope :conference_id, only: [:index]

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

  def destroy
    group = Group.find params[:id]
    group.remove_students
    if group.destroy
      render json: group,
             serializer: GroupShowSerializer,
             status: :ok
    else
      unprocessable_response group
    end
  end

  def index
    respond_to do |format|
      format.csv { index_csv }
    end
  end

  def show
    respond_to do |format|
      format.csv { show_csv }
      format.json { show_json }
    end
  end

  def update
    group = Group.includes(:conference, students: :school)
                 .find params[:id]
    if group.update_attributes group_params
      render json: group,
             serializer: GroupShowSerializer,
             status: :created
    else
      unprocessable_response group
    end
  end

  private

  def index_csv
    groups = apply_scopes(Group).all
    send_data groups.to_csv
  end

  def show_csv
    group = Group.find params[:id]
    send_data group.students.to_csv
  end

  def show_json
    group = Group.includes(:conference,
                           leaderships: :user,
                           students: :school)
                 .find params[:id]
    current_user.create_visit('Group', params[:id].to_i)
    render json: group, serializer: GroupShowSerializer
  end

  def group_params
    params.require(:group).permit(
      :conference_id,
      :letter,
      leaderships_attributes: [:style, :user_id],
    )
  end

end

