class RoomsPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
      type: React.PropTypes.oneOf(['conference', 'rooms']).isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  closeOverlay() {
    RoomsActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    return <RoomCreateModal
              conference={this.props.conference}
              template={this.props.template}
              type={this.props.type} />;
  }
}
