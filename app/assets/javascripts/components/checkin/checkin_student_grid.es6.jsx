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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      checkinButton: {
        marginTop: '10px',
      },
    };
  }

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
      checkout: {
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

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateCheckin() {
    var student = this.props.student;
    if (student.is_checked_in) {
      action = () => CheckinActions.checkoutStudent(student.id);
      content = `Check out ${student.first_name}`;
      style = this.clickableStyles.checkout;
    } else {
      action = () => CheckinActions.checkinStudent(student.id);
      content = `Check in ${student.first_name}`;
      style = this.clickableStyles.checkin;
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
        <div style={this.styles.checkinButton}>
          {this.generateCheckin()}
        </div>
      </div>
    );
  }
}
