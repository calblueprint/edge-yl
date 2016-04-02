class ProspectPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pairing: React.PropTypes.object,
      profile: React.PropTypes.object.isRequired,
      prospect: React.PropTypes.object,
      template: React.PropTypes.object,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  closeOverlay() {
    ProspectsActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    var pairing = this.props.pairing;
    var template = this.props.template;
    if (pairing) {
      return <ProspectEditModal pairing={pairing} />
    } else if (template) {
      return <ProspectCreateModal template={template} />;
    }
  }
}
