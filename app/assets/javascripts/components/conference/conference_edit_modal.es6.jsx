class ConferenceEditModal extends EditModal {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      pairing: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ConferenceActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updateStudent() {
    ConferenceActions.updateConference(this.props.pairing);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var pairing = this.props.pairing;
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.updateStudent()}
          content={'General Information'}
          icon={TypeConstants.icons.save} />
        <div style={StyleConstants.cards.content}>
          <CardInput
            action={(event) => ConferenceActions.storeValue(event.target.value)}
            errors={pairing.errors[pairing.key]}
            focus={true}
            label={Helpers.humanize(pairing.key)}
            value={pairing.value} />
        </div>
      </div>
    );
  }
}
