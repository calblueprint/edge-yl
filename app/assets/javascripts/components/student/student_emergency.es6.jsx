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
        <CardAttribute
          label={'Guardian first name'}
          value={student.guardian_first_name} />
        <CardAttribute
          label={'Guardian last name'}
          value={student.guardian_last_name} />
        <CardAttribute
          label={'Guardian phone number'}
          value={student.guardian_phone_number} />
        <CardAttribute
          label={'Guardian phone type'}
          value={student.guardian_phone_type} />
        <CardAttribute
          label={'Guardian email'}
          value={student.guardian_email} />
        <CardAttribute
          label={'Guardian relationship'}
          value={student.guardian_relationship} />
        <CardAttribute
          label={'Guardian employer'}
          value={student.guardian_employer} />
        <CardAttribute
          label={'Guardian job title'}
          value={student.guardian_job_title} />
        <br />
      </div>
    );
  }
}
