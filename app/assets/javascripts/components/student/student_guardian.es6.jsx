class StudentGuardian extends Component {

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
        <h4>{'Guardian one'}</h4>
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
        <h4>{'Guardian two'}</h4>
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
