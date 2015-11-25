class ResponsibilitiesController < Api::BaseController

  def create
    responsibility = Responsibility.new responsibility_params
    render json: responsibility, ResponsibilityBaseSerializer
  end

  private

  def responsibility_params
    params.require(:responsibility).permit(
      :status,
    )
  end

end
