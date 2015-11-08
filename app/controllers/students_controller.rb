class StudentsController < ApplicationController

  def create
    student = Student.new student_params
    render json: student
  end

  def index
    students = Student.all
    @students = students.to_json
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
