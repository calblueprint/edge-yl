module ValidationConstants

  EMAIL_FORMAT = {
    message: 'should follow format x@x.x',
    with: /.+@.+\..+/,
  }

  PHONE_FORMAT = {
    message: 'should follow format ###-###-####',
    with: /\A\d{3}-\d{3}-\d{4}\z/,
  }

  ZIP_FORMAT = {
    message: 'should follow format ##### or #####-####',
    with: /\A\d{5}(-\d{4})?\z/,
  }

end
