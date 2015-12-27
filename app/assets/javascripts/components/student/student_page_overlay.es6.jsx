class StudentPageOverlay extends PageOverlay {

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
      student: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeOverlay() {
    StudentActions.storeOverlay(false);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    if (this.props.overlay.type === TypeConstants.actions.edit) {
      return (
        <StudentEditModal
          overlay={this.props.overlay}
          student={this.props.student}
          template={this.props.template} />
      );
    } else {
      return (
        <StudentCreateModal
          overlay={this.props.overlay}
          profile={this.props.profile}
          student={this.props.student} />
      );
    }
  }
}
