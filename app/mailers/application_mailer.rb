class ApplicationMailer < ActionMailer::Base

  layout 'mailer'

  default from: ENV['smtp_username']
  default to: ENV['test_email']

  def standard(email)
    @email = email
    mail from: email.from,
         recipient: email.recipient,
         sender: email.sender,
         subject: email.subject,
         template_path: 'mails',
         to: email.to
  end

end
