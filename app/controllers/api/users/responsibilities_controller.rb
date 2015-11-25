class ResponsibilitiesController < Api::BaseController

  def create
    responsibility = Responsibility.new responsibility_params
    if responsibility.save
      render json: responsibility, serializer: ResponsibilityBaseSerializer
    else
      unprocessable_response responsibility
    end
  end

  private

  def responsibility_params
    params.require(:responsibility).permit(
      :status,
    )
  end

end
