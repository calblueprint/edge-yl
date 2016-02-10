class StudentMailer < ApplicationMailer

  def standard(email)
    @email = email
    mail to: email.to, subject: email.subject
  end

end
