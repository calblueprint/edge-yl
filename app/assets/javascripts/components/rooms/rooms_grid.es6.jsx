class RoomsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      rooms: React.PropTypes.array.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderCard(room) {
    return (
      <RoomsCard
        key={room.id}
        media={this.props.media}
        room={room} />
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
