class Api::ProspectsController < Api::BaseController

  def index
    prospects = Prospect.page params[:page]
    render json: prospects,
           serializer: PaginatedSerializer,
           each_serializer: PartialSchoolIndexSerializer

  end

  def create
    prospect = Prospect.new prospect_params
    if prospect.save
      render json: prospect,
             serializer: PartialSchoolIndexSerializer,
             status: :created
    else
      unprocessable_response prospect
    end
  end

  def destroy
    response = Prospect.new(id: params[:id])
    prospect = Prospect.find params[:id]
    prospect.destroy
    render json: response,
           status: 204
  end

  private

  def prospect_params
    params.require(:prospect).permit(
      :contact_email,
      :contact_first_name,
      :contact_last_name,
      :name,
      :website,
    )
  end

end
