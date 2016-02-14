class StudentMailer < ApplicationMailer

  def standard(email)
    @email = email
    mail(
      from: email.from,
      to: email.to,
      subject: email.subject,
    )
  end

end
