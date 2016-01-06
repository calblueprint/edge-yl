class ApplicationMailer < ActionMailer::Base

  default from: ENV['smtp_username']
  layout 'mailer'

end
