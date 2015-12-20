class ConferencesCreateModal extends CreateModal {

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
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ConferencesActions.storeOverlay(false);
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
