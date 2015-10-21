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
        flexDirection: 'column',
        flex: '1',
        position: 'relative',
        padding: '12px',
      },
      heading: {
        fontSize: '16px'
      }
    };
  }

  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <span style={this.styles.heading}>{'Status'}</span>
          {student.status + '\n\n'}
        <span style={this.styles.heading}>{'Group'}</span>
          {student.group_letter}
          {student.team_leader_name}
          {student.junior_crew_name + '\n\n'}
        <span style={this.styles.heading}>{'Rooming'}</span>
          {student.dorm_room_number}
          {student.roommate_name + '\n\n'}
      </div>
    );
  }
}
