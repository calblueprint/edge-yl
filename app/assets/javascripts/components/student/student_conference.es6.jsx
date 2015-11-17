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
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <h4>{'Status'}</h4>
          {student.status}
        <h4>{'Group'}</h4>
          {student.group_letter}
          {student.team_leader_name}
          {student.junior_crew_name}
        <h4>{'Rooming'}</h4>
          {student.dorm_room_number}
          {student.roommate_name}
      </div>
    );
  }
}
