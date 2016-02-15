class ApplicationMailer < ActionMailer::Base

  default from: ENV['smtp_username']
  default to: ENV['test_email']
  layout 'mailer'

end
