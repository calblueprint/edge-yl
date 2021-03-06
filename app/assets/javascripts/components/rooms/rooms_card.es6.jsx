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
        TypeConstants.rooms.conference,
        TypeConstants.rooms.default,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteRoom() {
    if (this.props.type === TypeConstants.rooms.conference) {
      ConferenceActions.deleteRoom(this.props.room.id);
    } else if (this.props.type === TypeConstants.rooms.default) {
      RoomsActions.deleteRoom(this.props.room.id);
    }
  }

  generateOptions() {
    return [
      {
        action: () => this.deleteRoom(),
        icon: TypeConstants.icons.delete,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          content={'Room'}
          options={this.generateOptions()} />
      );
    } else {
      return <CardHeader content={'Room'} />;
    }
  }

  renderConference() {
    if (this.props.type === TypeConstants.rooms.default) {
      var conference = this.props.room.conference;
      return (
        <CardAttribute
          clickable={true}
          label={'Conference'}
          route={RouteConstants.conferences.show(conference.id)}
          type={'h6'}
          value={conference.name} />
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
            label={'Name'}
            route={RouteConstants.rooms.show(room.id)}
            type={'h4'}
            value={room.full_name} />
          <CardAttribute
            label={'Capacity'}
            value={room.capacity} />
          <CardAttribute
            label={'Available Capacity'}
            value={room.available_capacity_count} />
          <CardAttribute
            label={'Gender'}
            value={room.gender} />
          {this.renderConference()}
        </div>
      </div>
    );
  }
}
