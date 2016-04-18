class Api::ResponsibilitiesController < Api::BaseController

  def create
    responsibility = Responsibility.new responsibility_params
    if responsibility.save
      render json: responsibility,
             serializer: ResponsibilityIndexSerializer,
             status: :created
    else
      unprocessable_response responsibility
    end
  end

  def update
    responsibility = Responsibility.find params[:id]
    if responsibility.update_attributes responsibility_params
      render json: responsibility,
             serializer: ResponsibilityIndexSerializer,
             status: :created
    else
      unprocessable_response
    end
  end

  private

  def responsibility_params
    params.require(:responsibility).permit(
      :conference_id,
      :school_id,
      :user_id,
    )
  end

end
