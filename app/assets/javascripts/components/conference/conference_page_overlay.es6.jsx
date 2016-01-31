class ConferencePageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      pairing: React.PropTypes.object,
      template: React.PropTypes.object,
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
    if (this.props.pairing) {
      return <ConferenceEditModal pairing={this.props.pairing} />;
    } else if (this.props.template.model == 'group') {
      return (
        <GroupCreateModal
          conference={this.props.conference}
          template={this.props.template} />
      );
    } else {
      return (
        <RoomCreateModal
          conference={this.props.conference}
          template={this.props.template}
          type={'conference'} />
      );
    }
  }
}
