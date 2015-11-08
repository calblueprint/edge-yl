class SchoolsController < ApplicationController

  def create
    school = School.new school_params
    respond_to do |format|
      format.json { render json: school }
    end
  end

  def index
    @schools = School.all
  end

  def show
    @school = School.find params[:id]
  end

  def school_params
    params.require(:school).permit(
      :address,
      :counselor_email,
      :counselor_name,
      :name,
    )
  end

end