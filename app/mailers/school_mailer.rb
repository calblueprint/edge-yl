class SchoolMailer < ApplicationMailer

  def create(school)
    @school = school
    @primary_contact = school.primary_contact
    mail to: @primary_contact.email,
         subject: "EDGE school registration confirmation | #{school.name}"
  end

end
