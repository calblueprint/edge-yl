class RoomGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      room: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storePairing(key, choices) {
    var room = this.props.room;
    RoomActions.storePairing({
      choices: choices,
      id: room.id,
      key: key,
      type: choices ? 'dropdown' : 'input',
      value: String(room[key]),
    });
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var room = this.props.room;
    return (
      <div style={StyleConstants.cards.content}>
        <CardAttribute
          action={() => this.storePairing('number')}
          editable={this.props.editable}
          label={'Number'}
          value={room.number} />
        <CardAttribute
          action={() => this.storePairing('gender', room.gender_choices)}
          editable={this.props.editable}
          label={'Gender'}
          value={room.gender} />
        <CardAttribute
          label={'Occupant Type'}
          value={room.style} />
        <CardAttribute
          action={() => this.storePairing('capacity')}
          editable={this.props.editable}
          label={'Capacity'}
          value={room.capacity} />
        <CardAttribute
          label={'Available Capacity'}
          value={room.available_capacity_count} />
      </div>
    );
  }
}
