module EnumConstants

  BOOLEANS = %w(yes no).freeze

  DIETARY_RESTRICTIONS = %w(
    dairy-free gluten-free
    none nut-allergy
    vegan vegetarian
  ).freeze

  GENDERS = %w(female male other).freeze

  GUARDIAN_RELATIONSHIPS = %w(
  	mother father aunt uncle
  	grandmother grandfather
  	stepmother stepfather guardian
  ).freeze

  PHONE_TYPES = %w(cell home work).freeze

  SHIRT_SIZES = %w(S M L XL XXL other).freeze

  STATES = %w(
    AL AK AZ AR CA CO CT DE FL GA
    HI ID IL IN IA KS KY LA ME MD
    MA MI MN MS MO MT NE NV NH NJ
    NM NY NC ND OH OK OR PA RI SC
    SD TN TX UT VT VA WA WV WI WY
  ).freeze

end
