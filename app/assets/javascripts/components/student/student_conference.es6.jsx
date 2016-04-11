class StudentConference extends Component {

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
  renderConference() {
    var conference = this.props.student.conference;
    if (conference) {
      return (
        <CardAttribute
          clickable={true}
          label={'Conference'}
          route={RouteConstants.conferences.show(conference.id)}
          type={'h5'}
          value={conference.name} />
      );
    } else {
      return <CardAttribute label={'Conference'} />;
    }
  }

  renderGroup() {
    var group = this.props.student.group;
    if (group) {
      return (
        <CardAttribute
          clickable={true}
          label={'Group'}
          route={RouteConstants.groups.show(group.id)}
          type={'h5'}
          value={group.full_name} />
      );
    } else {
      return <CardAttribute label={'Group'} />;
    }
  }

  renderRoom() {
    var room = this.props.student.room;
    if (room) {
      return (
        <CardAttribute
          clickable={true}
          label={'Room'}
          route={RouteConstants.rooms.show(room.id)}
          type={'h5'}
          value={room.full_name} />
      );
    } else {
      return <CardAttribute label={'Room'} />;
    }
  }

  renderStatus() {
    var status = this.props.student.is_checked_in;
    if (status) {
      return (
        <CardAttribute
          clickable={false}
          label={'Status'}
          type={'p'}
          value={this.props.student.is_checked_in ? 'Checked In' : 'Not Checked In'} />
      );
    } else {
      return <CardAttribute label={'Status'} />;
    }
  }

  renderStudent() {
    var student = this.props.student;
    return (
      <CardAttribute
        clickable={true}
        label={'Student'}
        route={RouteConstants.students.show(student.id)}
        type={'h5'}
        value={`${student.first_name} ${student.last_name}`} />
    );
  }

  render() {
    return (
      <div style={StyleConstants.cards.content}>
        {this.renderStatus()}
        <br />
        {this.renderConference()}
        <br />
        {this.renderGroup()}
        <br />
        {this.renderRoom()}
        <br />
        {this.renderStudent()}
      </div>
    );
  }
}
