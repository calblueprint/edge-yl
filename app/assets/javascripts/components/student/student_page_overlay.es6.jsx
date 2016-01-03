class StudentPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeOverlay() {
    StudentActions.storeTemplate(false);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    return (
      <StudentEditModal
        template={this.props.template} />
    );
    // } else {
    //   return (
    //     <StudentCreateModal
    //       overlay={this.props.overlay}
    //       profile={this.props.profile}
    //       student={this.props.student} />
    //   );
    // }
  }
}
