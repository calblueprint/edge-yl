class SchoolPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pairing: React.PropTypes.object,
      profile: React.PropTypes.object.isRequired,
      school: React.PropTypes.object.isRequired,
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
    if (this.props.pairing) {
      return <SchoolEditModal pairing={this.props.pairing} />;
    } else if (this.props.template) {
      return (
        <CommentCreateModal
          profile={this.props.profile}
          school={this.props.school}
          template={this.props.template}
          type={'school'} />
      );
    }
  }
}
