class RoomPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pairing: React.PropTypes.object,
      template: React.PropTypes.object,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  closeOverlay() {
    RoomActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    var pairing = this.props.pairing;
    var template = this.props.template;
    if (pairing) {
      return <RoomEditModal pairing={pairing} />;
    }
  }
}
