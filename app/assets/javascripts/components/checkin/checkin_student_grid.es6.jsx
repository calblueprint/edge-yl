class CheckinStudentGrid extends Component {

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
  checkin(studentId) {
    var params = {};
    var resolve = (response) => {
      CheckinActions.storeStudent(response);
      CheckinActions.fetchConference(this.props.conference.id);
    };
    var reject = (response) => CheckinActions.storeError(response);
    Requester.update(
      ApiConstants.students.checkin(studentId),
      params,
      resolve,
      reject,
    );
  }

  cancelCheckin(studentId) {
    var params = {};
    var resolve = (response) => {
      CheckinActions.storeStudent(response);
      CheckinActions.fetchConference(this.props.conference.id);
    };
    var reject = (response) => CheckinActions.storeError(response);
    Requester.update(
      ApiConstants.students.checkOut(studentId),
      params,
      resolve,
      reject,
    );
  }

  generateCheckin() {
    var student = this.props.student
    if (student.is_checked_in) {
      action = () => this.cancelCheckin(student.id);
      content = `${student.first_name} Checked In`;
      style = this.clickableStyles.cancelCheckin
    } else {
      action = () => this.checkin(student.id);
      content = `Check ${student.first_name} In`;
      style = this.clickableStyles.checkin
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
      checkin: {
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
      cancelCheckin: {
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
      checkinButton: {
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
        <div style={this.styles.checkinButton}> {this.generateCheckin()} </div>
      </div>
    );
  }
}
