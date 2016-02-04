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
    var template = this.props.template;
    if (this.props.pairing) {
      return <ConferenceEditModal pairing={this.props.pairing} />;
    } else if (this.props.template.model == 'group') {
      if (!template.attributes['leaderships_attributes']) {
        template.attributes['leaderships_attributes'] = [null, null];
      }
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
