class ProfilePageOverlay extends PageOverlay {

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
      profile: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick() {
    if (event.target === this._node) {
      ProfileActions.storeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeOverlay() {
    ProfileActions.storeOverlay(false);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    return (
      <ProfileEditModal
        overlay={this.props.overlay}
        profile={this.props.profile}
        template={this.props.template} />
    );
  }
}
