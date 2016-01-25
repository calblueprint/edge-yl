class ConferencePageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  closeOverlay() {
    ConferenceActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    if (this.props.template.model === 'conference') {
      return <ConferenceEditModal template={this.props.template} />;
    } else {
      return (
        <GroupCreateModal
          conference={this.props.conference}
          template={this.props.template} />
      );
    }
  }
}
