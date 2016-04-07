class CheckInStudentGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  checkIn(studentId) {
    var params = {};
    var resolve = (response) => CheckInActions.storeStudent(response);
    var reject = (response) => CheckInActions.storeError(response);
    Requester.update(
      ApiConstants.students.check_in(studentId),
      params,
      resolve,
      reject,
    );
  }

  checkOut(studentId) {
    var params = {};
    var resolve = (response) => CheckInActions.storeStudent(response);
    var reject = (response) => CheckInActions.storeError(response);
    Requester.update(
      ApiConstants.students.check_out(studentId),
      params,
      resolve,
      reject,
    );
  }

  generateCheckIn() {
    var student = this.props.student
    if (student.is_checked_in) {
      action = () => this.checkOut(student.id);
      content = `${student.first_name} Checked In`;
      style = this.clickableStyles.checkOut
    } else {
      action = () => this.checkIn(student.id);
      content = `Check ${student.first_name} In`;
      style = this.clickableStyles.checkIn
    }
    return (
      <Clickable
        action={action}
        content={content}
        styles={style}
        type={'h5'} />
    );
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get clickableStyles() {
    return {
      checkIn: {
        default: {
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30px',
          backgroundColor: StyleConstants.colors.indigo,
          borderRadius: '1px',
          color: StyleConstants.colors.white,
        },
      },
      checkOut: {
        default: {
          flex: '1',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '30px',
          backgroundColor: StyleConstants.colors.green,
          borderRadius: '1px',
          color: StyleConstants.colors.white,
        },
      },
    };
  }

  get styles() {
    return {
      checkInButton: {
        marginTop: '10px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div>
        <div style={StyleConstants.grids.wrap}>
          <StudentCard
            editable={false}
            media={this.props.media}
            student={this.props.student}
            type={TypeConstants.student.general} />
          <StudentCard
            editable={false}
            media={this.props.media}
            student={this.props.student}
            type={TypeConstants.student.conference} />
        </div>
        <div style={this.styles.checkInButton}> {this.generateCheckIn()} </div>
      </div>
    );
  }
}
