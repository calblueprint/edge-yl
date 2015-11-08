class Api::StudentsController < Api::BaseController

  def create
    student = Student.new student_params
    render json: student, serializer: BaseStudentSerializer
  end

  def index
    students = Student.all
    render json: students, each_serializer: BaseStudentSerializer
  end

  def show
    student = Student.find params[:id]
    render json: student, serializer: BaseStudentSerializer
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
