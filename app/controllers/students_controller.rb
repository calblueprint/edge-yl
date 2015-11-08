class StudentsController < ApplicationController

  def create
    student = Student.new student_params
    render json: student
  end

  def index
    students = Student.all
    @students = students.to_json(include: :school)
  end

  def show
    student = Student.includes(:school).find params[:id]
    # TODO(Warren): Do this instead with serializers.
    @student = student.to_json(include: :student_comments)
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
