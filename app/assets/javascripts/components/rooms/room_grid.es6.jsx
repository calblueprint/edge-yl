class RoomGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      room: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        <RoomCard
          editable={this.props.editable}
          media={this.props.media}
          room={this.props.room}
          type={TypeConstants.room.general} />
      </div>
    );
  }
}
