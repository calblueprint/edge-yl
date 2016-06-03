class Api::ImportsController < Api::BaseController

  skip_before_action :verify_authenticity_token

  def checkin
    conference_id = params[:conference_id].to_i
    file = params[:file]
    csv = CSV.parse(file.open, headers: true)
    csv.each do |tuple|
      student_submission = StudentSubmission.new(
        conference_id: conference_id,

        cell_phone: tuple[4] ? tuple[4] : '000-000-0000',
        email: tuple[5],
        first_name: tuple[1],
        home_phone: tuple[3] ? tuple[3] : '000-000-0000',
        last_name: tuple[2],

        address_city: 'n/a',
        address_one: 'n/a',
        address_state: 'CA',
        address_two: 'n/a',
        address_zip: 'n/a',
        birthday: '1900-12-25',
        current_page: 0,
        guardian_one_email: 'n/a',
        guardian_one_employer: 'n/a',
        guardian_one_first_name: 'n/a',
        guardian_one_job_title: 'n/a',
        guardian_one_last_name: 'n/a',
        guardian_one_phone_number: 'n/a',
        guardian_one_phone_type: EnumConstants::PHONE_TYPES.sample,
        guardian_one_relationship: EnumConstants::GUARDIAN_RELATIONSHIPS.sample,
        is_primary: true,
        preferred_name: '',
        shirt_size: EnumConstants::SHIRT_SIZES[5],
      )
      case tuple[6]
      when 'M'
        student_submission.gender = 'male'
      when 'F'
        student_submission.gender = 'female'
      else
        student_submission.gender = 'other'
      end
      if student_submission.save
        student = student_submission.seed_submission
        if student
          puts student.full_name
          group = Group.find_or_create_by(
            conference_id: conference_id,
            letter: tuple[8],
          )
          room = Room.find_by(
            conference_id: conference_id,
            number: tuple[7],
          )
          unless room.present?
            room = Room.create(
              conference_id: conference_id,
              building: 'Clark Kerr',
              capacity: 5,
              gender: student.gender,
              style: 'student',
              number: tuple[7],
            )
          end
          student.update_attributes(
            group: group,
            room: room,
          )
        end
      end
    end
    render json: { message: 'Import successful' }, status: :created
  end

  def schools
    file = params[:file]
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
  end

end
