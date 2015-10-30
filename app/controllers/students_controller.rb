class StudentsController < ApplicationController

  def create
    student = Student.new student_params
    respond_to do |format|
      format.json { render json: student }
    end
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
