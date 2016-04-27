if Rails.env.staging? or Rails.env.production?
  Figaro.require_keys(
    'application_domain',
    'secret_key_base',
    'secret_key_devise',
    'smtp_address',
    'smtp_domain',
    'smtp_password',
    'smtp_username',
  )
else
  Figaro.require_keys(
    'application_domain',
    'secret_key_base',
    'secret_key_devise',
  )
end
