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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
        <div style={this.styles.container}>
          <h4>{'Guardian One'}</h4>
          <h6>{student.guardian_one_name}</h6>
          <h6>{student.guardian_one_phone}</h6>
          <h6>{student.guardian_one_email}</h6>
          <br />
          <h4>{'Guardian Two'}</h4>
          <h6>{student.guardian_two_name}</h6>
          <h6>{student.guardian_two_phone}</h6>
          <h6>{student.guardian_two_email}</h6>
        </div>
    );
  }
}
