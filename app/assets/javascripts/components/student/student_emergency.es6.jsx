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
      <div style={StyleConstants.cards.body}>
        <h5>{'Guardian One'}</h5>
        <CardAttribute
          label={'First name'}
          value={student.guardian_first_name} />
        <CardAttribute
          label={'Last name'}
          value={student.guardian_last_name} />
        <CardAttribute
          label={'Phone number'}
          value={student.guardian_phone_number} />
        <CardAttribute
          label={'Phone type'}
          value={student.guardian_phone_type} />
        <CardAttribute
          label={'Email'}
          value={student.guardian_email} />
        <CardAttribute
          label={'Relationship'}
          value={student.guardian_relationship} />
        <CardAttribute
          label={'Employer'}
          value={student.guardian_employer} />
        <CardAttribute
          label={'Job title'}
          value={student.guardian_job_title} />
        <br />
      </div>
    );
  }
}
