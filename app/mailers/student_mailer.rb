class StudentMailer < ApplicationMailer

  def create(student_submission)
    @student_submission = student_submission
    mail to: student_submission.email,
         subject: "EDGE student registration | #{student_submission.full_name}"
  end

  def standard(email)
    @email = email
    if Rails.env.staging?
      mail body-plain: email.content
           from: email.from,
           recipient: email.recipient
           sender: email.sender,
           subject: email.subject,
           to: email.to
    else
      mail from: email.from,
           to: email.to,
           subject: email.subject
    end
  end

end
