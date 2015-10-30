class StudentsController < ApplicationController

  def create
    student = Student.new student_params
    respond_to do |format|
      format.json { render json: student }
    end
  end

  def index
    @students = Student.all
    # TODO(Warren): Fix this - has to do with react-rails prerender.
    # render component: 'StudentsPage', props: { students: @students }
  end

  def show
    @student = Student.find params[:id]
    # TODO(Warren): Fix this - has to do with react-rails prerender.
    # render component: 'StudentPage', props: { student: @student }
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
