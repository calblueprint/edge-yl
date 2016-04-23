class ApplicationMailer < ActionMailer::Base

  layout 'mailer'

  default from: ENV['smtp_username']

  def new_mail(email)
    @email = email
    mail from: "EDGE Youth Leadership <notification-no-reply@#{ENV['email_domain']}>",
         sender: "notification-no-reply@#{ENV['email_domain']}",
         recipient: email.user.email,
         subject: "New EDGE email from #{email.emailable_name}",
         template_path: 'mails',
         to: "#{email.user.full_name} <#{email.user.email}>"
  end

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
