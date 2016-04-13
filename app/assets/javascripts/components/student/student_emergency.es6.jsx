class StudentEmergency extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.content}>
        <h5>{'Guardian One'}</h5>
        <CardAttribute
          label={'First name'}
          value={student.guardian_one_first_name} />
        <CardAttribute
          label={'Last name'}
          value={student.guardian_one_last_name} />
        <CardAttribute
          label={'Phone number'}
          value={student.guardian_one_phone_number} />
        <CardAttribute
          label={'Phone type'}
          value={student.guardian_one_phone_type} />
        <CardAttribute
          humanize={false}
          label={'Email'}
          value={student.guardian_one_email} />
        <CardAttribute
          label={'Relationship'}
          value={student.guardian_one_relationship} />
        <CardAttribute
          label={'Employer'}
          value={student.guardian_one_employer} />
        <CardAttribute
          label={'Job title'}
          value={student.guardian_one_job_title} />
        <br />
        <h5>{'Guardian Two'}</h5>
        <CardAttribute
          label={'First name'}
          value={student.guardian_two_first_name} />
        <CardAttribute
          label={'Last name'}
          value={student.guardian_two_last_name} />
        <CardAttribute
          label={'Phone number'}
          value={student.guardian_two_phone_number} />
        <CardAttribute
          label={'Phone type'}
          value={student.guardian_two_phone_type} />
        <CardAttribute
          humanize={false}
          label={'Email'}
          value={student.guardian_two_email} />
        <CardAttribute
          label={'Relationship'}
          value={student.guardian_two_relationship} />
        <CardAttribute
          label={'Employer'}
          value={student.guardian_two_employer} />
        <CardAttribute
          label={'Job title'}
          value={student.guardian_two_job_title} />
      </div>
    );
  }
}
