module EnumConstants

  BOOLEANS = %w(yes no)

  DIETARY_RESTRICTIONS = %w(dairy-free gluten-free none nut-allergy vegan vegetarian)

  EMAIL_FORMAT = {
    message: 'should follow format x@x.x',
    with: /.+@.+\..+/,
  }

  GENDERS = %w(female male other)

  GUARDIAN_RELATIONSHIPS = %w(
  	mother father aunt uncle
  	grandmother grandfather
  	stepmother stepfather guardian)

  PHONE_FORMAT = {
    message: 'should follow format ###-###-####',
    with: /\A\d{3}-\d{3}-\d{4}\z/,
  }

  PHONE_TYPES = %w(cell home work)

  SHIRT_SIZES = %w(S M L XL XXL)

  STATES = %w(
    AL AK AZ AR CA CO CT DE FL GA
    HI ID IL IN IA KS KY LA ME MD
    MA MI MN MS MO MT NE NV NH NJ
    NM NY NC ND OH OK OR PA RI SC
    SD TN TX UT VT VA WA WV WI WY
  )

  ZIP_FORMAT = {
    message: 'should follow format ##### or #####-####',
    with: /\A\d{5}(-\d{4})?\z/,
  }

end
