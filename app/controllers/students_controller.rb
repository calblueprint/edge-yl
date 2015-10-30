class StudentsController < ApplicationController

  def create
    student = Student.new params
    respond_to do |format|
      format.json { render json: student }
    end
    # student = Student.new
    # if student.save
    # else

    # end
  end

  def index
    @students = Student.all
  end

  def show
    @student = Student.find params[:id]
  end

end
