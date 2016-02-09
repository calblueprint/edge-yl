class RoomsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      room: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.room.conference,
        TypeConstants.room.default,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteRoom() {
    if (this.props.type == TypeConstants.room.conference) {
      ConferenceActions.deleteRoom(this.props.room.id);
    } else if (this.props.type == TypeConstants.room.default) {
      RoomsActions.deleteRoom(this.props.room.id);
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          action={() => this.deleteRoom()}
          content={'Room'}
          icon={TypeConstants.icons.delete} />
      );
    } else {
      return <CardHeader content={'Room'} />;
    }
  }

  renderConference() {
    if (this.props.type == TypeConstants.room.default) {
      var room = this.props.room;
      return (
        <CardAttribute
          clickable={true}
          label={'Conference'}
          route={RouteConstants.conferences.show(room.conference.id)}
          type={'h6'}
          value={room.conference.name} />
      );
    }
  }
  render() {
    var room = this.props.room;
    return (
      <div style={StyleConstants.cards.container(this.props.media)}>
        {this.renderHeader()}
        <div style={StyleConstants.cards.content}>
          <CardAttribute
            clickable={true}
            label={'Number'}
            route={RouteConstants.rooms.show(room.id)}
            type={'h4'}
            value={room.number} />
          <CardAttribute
            label={'Building'}
            value={room.building} />
          <CardAttribute
            label={'Capacity'}
            value={room.capacity} />
          <CardAttribute
            label={'Gender'}
            value={room.gender} />
          {this.renderConference()}
        </div>
      </div>
    );
  }
}
