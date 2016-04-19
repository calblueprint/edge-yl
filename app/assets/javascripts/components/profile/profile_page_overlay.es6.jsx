class ProfilePageOverlay extends PageOverlay {

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
    ProfileActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    var pairing = this.props.pairing;
    var profile = this.props.profile;
    var template = this.props.template;
    if (template.key === TypeConstants.profile.password) {
      return (
        <ProfilePasswordEditModal
          template={template} />
      );
    } else {
      return (
        <ProfileEditModal
          pairing={pairing} />
      );
    }
  }
}
