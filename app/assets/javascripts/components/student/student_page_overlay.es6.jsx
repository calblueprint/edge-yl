class StudentPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pairing: React.PropTypes.object,
      profile: React.PropTypes.object.isRequired,
      student: React.PropTypes.object.isRequired,
      template: React.PropTypes.object,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  closeOverlay() {
    StudentActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    if (this.props.pairing) {
      return <StudentEditModal pairing={this.props.pairing} />;
    } else if (this.props.template) {
      return (
        <CommentCreateModal
          profile={this.props.profile}
          student={this.props.student}
          template={this.props.template}
          type={TypeConstants.pages.student} />
      );
    }
  }
}
