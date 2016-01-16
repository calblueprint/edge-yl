class StudentPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      student: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
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
    if (this.props.template.model === 'student') {
      return <StudentEditModal template={this.props.template} />;
    } else {
      return (
        <StudentCreateModal
          profile={this.props.profile}
          student={this.props.student}
          template={this.props.template} />
      );
    }
  }
}
