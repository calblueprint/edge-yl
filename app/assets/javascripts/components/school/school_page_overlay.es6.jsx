class SchoolPageOverlay extends PageOverlay {

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
      school: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeOverlay() {
    SchoolActions.storeOverlay(false);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    if (this.props.overlay.type === TypeConstants.actions.edit) {
      return (
        <SchoolEditModal
          overlay={this.props.overlay}
          school={this.props.school}
          template={this.props.template} />
      );
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
