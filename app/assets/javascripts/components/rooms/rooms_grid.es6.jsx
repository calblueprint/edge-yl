class RoomsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      media: React.PropTypes.string.isRequired,
      rooms: React.PropTypes.array.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.room.conference,
        TypeConstants.room.default,
      ]).isRequired,
    };
  }

  static get defaultProps() {
    return {
      editable: false,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(room) {
    return (
      <RoomsCard
        editable={this.props.editable}
        key={room.id}
        media={this.props.media}
        room={room}
        type={this.props.type} />
    );
  }

  renderCards() {
    return this.props.rooms.map((room) => this.renderCard(room));
  }

  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        {this.renderCards()}
      </div>
    );
  }
}
