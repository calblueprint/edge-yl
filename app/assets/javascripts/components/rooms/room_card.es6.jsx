class RoomCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      room: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.room.general,
      ]).isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    switch (this.props.type) {
      case TypeConstants.room.general:
        return (
          <RoomGeneral
            editable={this.props.editable}
            room={this.props.room} />
        );
    };
  }

  renderTitle() {
    switch (this.props.type) {
      case TypeConstants.room.general:
        return 'General Information';
    };
  }

  render() {
    return (
      <div style={StyleConstants.cards.show(this.props.media)}>
        <CardHeader content={this.renderTitle()} />
        {this.renderBody()}
      </div>
    );
  }
}
