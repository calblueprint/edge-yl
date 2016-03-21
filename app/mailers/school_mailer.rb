class SchoolMailer < ApplicationMailer

  def create(school)
    @school = school
    @primary_contact = school.primary_contact
    mail to: @primary_contact.email,
         subject: "EDGE School Registration Confirmation | #{school.name}"
  end

end
