class Api::ContactsController < Api::BaseController

  def update
    contact = Contact.find params[:id]
    if contact.update_attributes contact_params
      render json: contact,
             serializer: ContactBaseSerializer,
             status: :created
    else
      unprocessable_response contact
    end
  end

  private

  def contact_params
    params.require(:contact).permit(
      :email,
      :first_name,
      :last_name,
      :phone_number,
      :title,
    )
  end

end
