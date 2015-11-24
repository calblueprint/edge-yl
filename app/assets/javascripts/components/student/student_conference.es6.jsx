class StudentConference extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
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
    var studentConference = this.props.student.student_conference;
    return (
      <div style={this.styles.container}>
        <h4>{'Status'}</h4>
        <h6>{studentConference.status}</h6>
        <br />
        <h4>{'Group'}</h4>
        <h6>{studentConference.group_letter}</h6>
        <h6>{studentConference.team_leader_name}</h6>
        <h6>{studentConference.junior_crew_name}</h6>
        <br />
        <h4>{'Rooming'}</h4>
        <h6>{studentConference.dorm_room_number}</h6>
        <h6>{studentConference.roommate_name}</h6>
      </div>
    );
  }
}
