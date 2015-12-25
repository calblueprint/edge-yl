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
        <h5>{'Guardian one'}</h5>
        <CardAttribute
          label={'Name'}
          value={student.guardian_one_name} />
        <CardAttribute
          label={'Phone'}
          value={student.guardian_one_phone} />
        <CardAttribute
          label={'Email'}
          value={student.guardian_one_email} />
        <br />
        <h5>{'Guardian two'}</h5>
        <CardAttribute
          label={'Name'}
          value={student.guardian_two_name} />
        <CardAttribute
          label={'Phone'}
          value={student.guardian_two_phone} />
        <CardAttribute
          label={'Email'}
          value={student.guardian_two_email} />
      </div>
    );
  }
}
