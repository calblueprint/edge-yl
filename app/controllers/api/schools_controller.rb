class Api::SchoolsController < Api::BaseController

  def create
    school = School.new school_params
    render json: student, serializer: SchoolBaseSerializer
  end

  def index
    schools = School.all
    # TODO(Warren): Pagination!
    students = School.page params[:page]
    render json: students,
                 serializer: PaginatedSerializer,
                 each_serializer: SchoolIndexSerializer
  end

  def show
    school = School.find params[:id]
    # TODO(Warren): When necessary, serialize with a SchoolShowSerializer.
    render json: school, serializer: SchoolShowSerializer
  end

  def update
    school = School.find params[:id]
    if school.update_attributes school_params
      render json: school, serializer: SchoolShowSerializer, status: 201
    else
      unprocessable_response school
    end
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
