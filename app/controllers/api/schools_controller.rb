class Api::SchoolsController < Api::BaseController

  def create
    school = School.new school_params
    render json: student, serializer: SchoolBaseSerializer
  end

  def index
    schools = School.all
    render json: schools, each_serializer: SchoolIndexSerializer
  end

  def show
    school = School.find params[:id]
    # TODO(Warren): When necessary, serialize with a SchoolShowSerializer.
    render json: school, serializer: SchoolIndexSerializer
  end

  private

  def school_params
    params.require(:school).permit(
      :address,
      :counselor_email,
      :counselor_name,
      :name,
    )
  end

end
