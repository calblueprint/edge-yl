class SubmissionsMailer < ApplicationMailer

  def create_student(student_submission)
    @student_submission = student_submission
    mail to: student_submission.email,
         subject: "EDGE Student Registration | #{student_submission.full_name}",
         template_path: 'mails'
  end

  def submit_school(school_submission)
    @school_submission = school_submission
    mail to: @school_submission.contact_email,
         subject: "EDGE School Registration Confirmation | #{school_submission.name}",
         template_path: 'mails'
  end

end
