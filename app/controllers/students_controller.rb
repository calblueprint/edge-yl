class StudentsController < ApplicationController

  def create
    student = Student.new student_params
    render json: student
  end

  def index
    students = Student.all
    @students = students.map { |student|
      serialize_student(student)
    }
  end

  def show
    student = Student.find params[:id]
    @student = serialize_student(student)
  end

  private

  def serialize_student(student)
    ActiveModel::BaseStudentSerializer.new(student).serializable_hash
  end

  def serialize_students(students)
    ActiveModel::

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
