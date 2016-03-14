class Api::ContactsController < Api::BaseController

  def create
    contact = Contact.new contact_params
    if contact.save
      render json: contact,
             serializer: ContactBaseSerializer,
             status: :created
    else
      unprocessable_response room
    end
  end

  def promote
    contact = Contact.find params[:id]
    if contact.promote
      render json: contact,
             serializer: ContactBaseSerializer,
             status: :created
    end
  end

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
      :is_primary,
      :last_name,
      :phone_number,
      :school_id,
      :title,
    )
  end

end
