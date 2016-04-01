class Api::ProspectsController < Api::BaseController

  def index
    respond_to do |format|
      format.csv { index_csv }
      format.json { index_json }
    end
  end

  def create
    prospect = Prospect.new prospect_params
    if prospect.save
      render json: prospect,
             serializer: ProspectIndexSerializer,
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

  def index_csv
    prospects = Prospect.all
    send_data prospects.to_csv
  end

  def index_json
    prospects = Prospect.page params[:page]
    render json: prospects,
           serializer: PaginatedSerializer,
           each_serializer: ProspectIndexSerializer
  end

  def prospect_params
    params.require(:prospect).permit(
      :contact_email,
      :contact_first_name,
      :contact_last_name,
      :contact_phone,
      :name,
      :priority,
      :website,
    )
  end

end
