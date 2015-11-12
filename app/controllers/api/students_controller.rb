class Api::StudentsController < Api::BaseController

  def create
    student = Student.new student_params
    render json: student, serializer: StudentShowSerializer
  end

  def index
    students = Student.all
    render json: students, each_serializer: StudentIndexSerializer
  end

  def show
    student = Student.find params[:id]
    render json: student, serializer: StudentShowSerializer
  end

  def update
    # TODO(Unzi): Fill this action up!
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
