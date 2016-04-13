class CheckInStudentGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  checkIn(studentId) {
    var params = {};
    var resolve = (response) => {
      CheckInActions.storeStudent(response);
      CheckInActions.fetchConference(this.props.conference.id);
    };
    var reject = (response) => CheckInActions.storeError(response);
    Requester.update(
      ApiConstants.students.checkIn(studentId),
      params,
      resolve,
      reject,
    );
  }

  cancelCheckIn(studentId) {
    var params = {};
    var resolve = (response) => {
      CheckInActions.storeStudent(response);
      CheckInActions.fetchConference(this.props.conference.id);
    };
    var reject = (response) => CheckInActions.storeError(response);
    Requester.update(
      ApiConstants.students.checkOut(studentId),
      params,
      resolve,
      reject,
    );
  }

  generateCheckIn() {
    var student = this.props.student
    if (student.is_checked_in) {
      action = () => this.cancelCheckIn(student.id);
      content = `${student.first_name} Checked In`;
      style = this.clickableStyles.cancelCheckIn
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
      cancelCheckIn: {
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
