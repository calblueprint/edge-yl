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
  storeTemplate(key, choices) {
    var room = this.props.room;
    RoomActions.storeTemplate({
      choices: choices,
      id: room.id,
      key: key,
      model: TypeConstants.models.room,
      type: choices ? 'dropdown' : 'input',
      value: room[key],
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
          action={() => this.storeTemplate('number')}
          editable={this.props.editable}
          label={'Number'}
          value={room.number} />
      </div>
    );
  }
}
