class ConferencesPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      overlay: React.PropTypes.shape({
        active: React.PropTypes.bool.isRequired,
        target: React.PropTypes.string.isRequired,
        type: React.PropTypes.string.isRequired,
      }).isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick() {
    if (event.target === this._node) {
      ConferencesActions.storeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeOverlay() {
    ConferencesActions.storeOverlay(false);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    return (
      <ConferencesCreateModal
        overlay={this.props.overlay}
        template={this.props.template} />
    );
  }
}
