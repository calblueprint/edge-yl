class StudentMailer < ApplicationMailer

  def create(student_submission)
    @student_submission = student_submission
    mail to: student_submission.email,
         subject: "EDGE student registration | #{student_submission.full_name}"
  end

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
