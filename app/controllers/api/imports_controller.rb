class Api::ImportsController < Api::BaseController

  skip_before_action :verify_authenticity_token

  def schools
    file = params[:upload]
    csv = CSV.parse(file.open, headers: true)
    csv.each do |row|
      School.create(
        address_city: row[8],
        address_one: row[6],
        address_two: row[7],
        address_state: row[9],
        address_zip: row[10],
        name: row[1],
      )
      Contact.create(
        email: row[11],
        first_name: row[2],
        is_primary: true,
        last_name: row[3],
        phone_number: row[12],
        school: school,
        title: row[4],
      )
    end
    redirect_to schools_path
  end

  def students
    # if student's shchool is a propect we delete prospect and make a school
    # if school is already there, append a new contact.
    file = params[:upload]
    csv = CSV.parse(file.open, headers: true)
    csv.each do |row|
      # school = School.create(
      #  address_city: row[8],
      #  address_one: row[6],
      #  address_two: row[7],
      #  address_state: row[9],
      #  address_zip: row[10],
      #  name: row[1],
      # )
      # contact = Contact.create(
      #   email: row[11],
      #   first_name: row[2],
      #   is_primary: true,
      #   last_name: row[3],
      #   phone_number: row[12],
      #   school: school,
      #   title: row[4],
      # )
      Student.create(
        address_city: row[22].blank? ? 'n/a' : row[22],
        address_one: row[20].blank? ? 'n/a' : row[20],
        address_state: row[23].blank? ? 'n/a' : row[23],
        address_two: row[21].blank? ? 'n/a' : row[21],
        address_zip: row[24] .blank? ? 'n/a' : row[24],
        allergies: 0, # row55
        birthday: '2001-12-31', # row29
        cell_phone: row[27] || 'n/a',
        dietary_restrictions: 0, # row70
        other_dietary_restrictions: 'Nut allergy',
        email: row[25] || 'n/a',
        emergency_consent: 0,
        exercise_limitations: 'None',
        first_name: row[17] || 'n/a',
        gender: 0, # row28
        guardian_email: row[35] || 'n/a',
        guardian_employer: row[37] || 'n/a',
        guardian_first_name: row[31] || 'n/a',
        guardian_job_title: row[38] || 'n/a',
        guardian_last_name: row[32] || 'n/a',
        guardian_phone_number: row[36] || 'n/a',
        guardian_phone_type: 0, # row36
        guardian_relationship: 0, # row33
        health_conditions: 0,
        home_phone: row[26] || 'n/a',
        immunizations: 0, # row54,
        is_flagged: 0,
        is_primary: 0,
        last_name: row[18] || 'n/a',
        medications: 'Warren',
        preferred_name: 'Warren',
        psychologist_consent: 0,
        psychologist_consent_name: 'Warren',
        # school: school,
        shirt_size: 0, # row30
        conference_id: 0,
      )
      # -1, 'unknown'
      # if school exiists, don't create new one
    end
    redirect_to schools_path
  end

end
