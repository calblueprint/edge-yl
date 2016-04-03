class ProspectPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pairing: React.PropTypes.object,
      profile: React.PropTypes.object,
      prospect: React.PropTypes.object,
      template: React.PropTypes.object,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  closeOverlay() {
    ProspectActions.closeOverlay();
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
      if (template.model === TypeConstants.models.prospect) {
        return (
          <CommentCreateModal
            profile={this.props.profile}
            prospect={this.props.prospect}
            template={this.props.template}
            type={TypeConstants.comments.prospect} />
        );
      }
    }
  }
}
