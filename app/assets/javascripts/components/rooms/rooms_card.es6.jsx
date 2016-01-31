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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      header: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: '5px',
        borderBottom: 'solid #D6D6D6 1px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {
        display: 'inline',
        top: '0px',
        paddingBottom: '5px',
      },
    };
  }


  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteRoomFromConference() {
    ConferenceActions.deleteRoom(this.props.room.id);
  }

  // --------------------------------------------------
  // Render
  renderHeader() {
    if (this.props.editable) {
      return (
        <CardHeader
          action={() => this.deleteRoomFromConference()}
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
      <div style={StyleConstants.cards.wrapper(this.props.media)}>
        {this.renderHeader()}
        <div style={StyleConstants.cards.body}>
          <CardAttribute
            clickable={true}
            label={'Number'}
            route={RouteConstants.rooms.show(room.id)}
            type={'h4'}
            value={room.number} />
          <CardAttribute
            clickable={true}
            label={'Capacity'}
            value={room.capacity} />
          <CardAttribute
            clickable={true}
            label={'Gender'}
            value={room.gender} />
          {this.renderConference()}
        </div>
      </div>
    );
  }
}
