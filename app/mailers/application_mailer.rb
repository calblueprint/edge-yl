class ApplicationMailer < ActionMailer::Base

  layout 'mailer'

  default from: ENV['smtp_username']
  default to: ENV['test_email']

  def standard(email)
    @email = email
    if Rails.env.staging?
      mail from: email.from,
           recipient: email.recipient,
           sender: email.sender,
           subject: email.subject,
           to: email.to
    else
      mail from: email.from,
           to: email.to,
           subject: email.subject,
           template_path: 'mails'
    end
  end

end
