class Api::StudentsController < Api::BaseController

  def create
    student = Student.new student_params
    if student.save
      render json: student, serializer: StudentBaseSerializer, status: 201
    else
      unprocessable_response student
    end
  end

  def index
    students = Student.includes(:group, :school)
                      .order('first_name ASC')
                      .page params[:page]
    render json: students,
                 serializer: PaginatedSerializer,
                 each_serializer: StudentIndexSerializer
  end

  def show
    student = Student.includes(comments: :user).find params[:id]
    current_user.create_visit('Student', params[:id].to_i)
    render json: student, serializer: StudentShowSerializer
  end

  def update
    student = Student.includes(comments: :user).find params[:id]
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
