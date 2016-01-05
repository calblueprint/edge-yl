class SchoolPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
      school: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeOverlay() {
    SchoolActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    if (this.props.template.model === 'school') {
      return <SchoolEditModal template={this.props.template} />;
    } else {
      return (
        <SchoolCreateModal
          overlay={this.props.overlay}
          profile={this.props.profile}
          school={this.props.school} />
      );
    }
  }
}
