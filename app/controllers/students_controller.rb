class StudentsController < ApplicationController

  def create
    student = Student.new student_params
    render json: student
  end

  def index
    @students = Student.all
  end

  def show
    @student = Student.find params[:id]
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
