class ConferencesCreateModal extends CreateModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ConferencesActions.closeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createConference() {
    ConferencesActions.createConference(this.props.template);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.createConference()}
          content={'New Conference'}
          icon={TypeConstants.icons.save} />
        <ConferenceCreate
          template={this.props.template} />
      </div>
    );
  }
}
