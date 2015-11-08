class Api::SchoolsController < Api::BaseController

  def create
    school = School.new school_params
    render json: student, serializer: SchoolIndexSerializer
  end

  def index
    schools = School.all
    render json: schools, each_serializer: SchoolIndexSerializer
  end

  def show
    school = School.find params[:id]
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
