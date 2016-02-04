class ConferencePageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conference: React.PropTypes.object.isRequired,
      groupables: React.PropTypes.arrayOf(React.PropTypes.object),
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
    var pairing = this.props.pairing;
    var template = this.props.template;
    if (pairing) {
      return <ConferenceEditModal pairing={pairing} />;
    } else if (template.model == 'group') {
      return (
        <GroupCreateModal
          conference={this.props.conference}
          groupables={this.props.groupables}
          template={template} />
      );
    } else {
      return (
        <RoomCreateModal
          conference={this.props.conference}
          template={template}
          type={'conference'} />
      );
    }
  }
}
