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
          value={room.full_name} />
      );
    } else {
      return <CardAttribute label={'Room'} />;
    }
  }

  render() {
    return (
      <div style={StyleConstants.cards.content}>
        {this.renderConference()}
        <br />
        {this.renderGroup()}
        <br />
        {this.renderRoom()}
      </div>
    );
  }
}
