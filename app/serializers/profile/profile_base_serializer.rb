class ProfileBaseSerializer < BaseSerializer

  attributes :app_email,
             :id,
             :email,
             :first_name,
             :full_name,
             :has_sidebar,
             :is_admin,
             :last_name,
             :unread_count

  has_many :visits, serializer: VisitBaseSerializer

  def app_email
    "#{object.username}@#{ENV['email_domain']}"
  end

  def visits
    object.visits.first(3)
  end

end
