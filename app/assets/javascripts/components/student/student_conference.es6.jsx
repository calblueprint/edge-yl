class StudentConference extends Component {

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

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '12px',
      },
      heading: {
        fontSize: '16px',
      },
    };
  }

  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <h2 style={this.styles.heading}>{'Status'}</h2>
          {student.status}
        <h2 style={this.styles.heading}>{'Group'}</h2>
          {student.group_letter}
          {student.team_leader_name}
          {student.junior_crew_name}
        <h2 style={this.styles.heading}>{'Rooming'}</h2>
          {student.dorm_room_number}
          {student.roommate_name}
      </div>
    );
  }
}
