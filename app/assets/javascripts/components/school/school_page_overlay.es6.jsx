class SchoolPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pairing: React.PropTypes.object,
      profile: React.PropTypes.object.isRequired,
      school: React.PropTypes.object.isRequired,
      schoolables: React.PropTypes.arrayOf(React.PropTypes.object),
      template: React.PropTypes.object,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  closeOverlay() {
    SchoolActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    var pairing = this.props.pairing;
    var template = this.props.template;
    if (pairing) {
      if (pairing.model === TypeConstants.models.contact) {
        return <ContactEditModal pairing={pairing} />;
      } else if (pairing.model === TypeConstants.models.responsibility) {
        return (
          <ResponsibilityEditModal
            pairing={pairing}
            schoolables={this.props.schoolables} />
        );
      } else {
        return <SchoolEditModal pairing={pairing} />;
      }
    } else if (template) {
      if (template.model === TypeConstants.models.contact) {
        return <ContactCreateModal template={template} />;
      } else {
        return (
          <CommentCreateModal
            profile={this.props.profile}
            school={this.props.school}
            template={this.props.template}
            type={TypeConstants.comments.school} />
        );
      }
    }
  }
}
