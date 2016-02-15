class StudentMailer < ApplicationMailer

  def standard(email)
    @email = email
    if Rails.env.staging?
      mail subject: email.subject
    else
      mail from: email.from,
           to: email.to,
           subject: email.subject
    end
  end

end
