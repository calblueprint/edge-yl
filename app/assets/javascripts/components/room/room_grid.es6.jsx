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
    var room = this.props.room;
    // TODO: Handle empty state correctly. This is hacky
    var roomId = room.id ? room.id : 0;
    return (
      <div style={StyleConstants.grids.wrap}>
        <RoomCard
          editable={this.props.editable}
          media={this.props.media}
          room={room}
          type={TypeConstants.room.general} />
        <GridHeader title={'Students in this room'} />
        <StudentsGrid
          editable={this.props.editable}
          media={this.props.media}
          students={room.students}
          type={TypeConstants.students.room}
          typeId={roomId} />
      </div>
    );
  }
}
