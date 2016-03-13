class Api::PartialSchoolsController < Api::BaseController

  def index
    partial_schools = PartialSchool.page params[:page]
    render json: partial_schools,
           serializer: PaginatedSerializer,
           each_serializer: PartialSchoolIndexSerializer

  end

  def create
    partial_school = PartialSchool.new partial_school_params
    if partial_school.save
      render json: partial_school,
             serializer: PartialSchoolIndexSerializer,
             status: :created
    else
      unprocessable_response partial_school
    end
  end

  def destroy
    response = PartialSchool.new(id: params[:id])
    partial_school = PartialSchool.find params[:id]
    partial_school.destroy
    render json: response,
           status: 204
  end

  private

  def partial_school_params
    params.require(:partial_school).permit(
      :contact_email,
      :contact_first_name,
      :contact_last_name,
      :contact_title,
      :name,
      :website,
    )
  end

end
