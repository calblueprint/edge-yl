class SchoolMailer < ApplicationMailer

  def welcome(school)
    @school = school
    mail to: school.contact_email, subject: "Welcome #{school.name}!"
  end

end
