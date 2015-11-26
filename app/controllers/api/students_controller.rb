class Api::StudentsController < Api::BaseController

  def create
    student = Student.new student_params
    render json: student, serializer: StudentBaseSerializer
  end

  def index
    students = Student.includes(:school).page params[:page]
    render json: students,
                 serializer: PaginatedSerializer,
                 each_serializer: StudentIndexSerializer
  end

  def show
    student = Student.find params[:id]
    current_user.create_visit('Student', params[:id].to_i)
    render json: student, serializer: StudentShowSerializer
  end

  def update
    student = Student.find params[:id]
    if student.update_attributes student_params
      render json: student, serializer: StudentShowSerializer, status: 201
    else
      unprocessable_response student
    end
  end

  private

  def student_params
    params.require(:student).permit(
      :birthday,
      :cell_phone,
      :email,
      :first_name,
      :home_address,
      :home_phone,
      :last_name,
    )
  end

end
