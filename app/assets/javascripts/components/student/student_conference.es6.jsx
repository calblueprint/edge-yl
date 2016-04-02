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
          value={`Room ${room.number} - ${room.building}`} />
      );
    } else {
      return <CardAttribute label={'Room'} />;
    }
  }

  render() {
    return (
      <div style={StyleConstants.cards.content}>
        <h5>{'Status'}</h5>
        <br />
        {this.renderGroup()}
        <br />
        {this.renderRoom()}
      </div>
    );
  }
}
