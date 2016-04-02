class ProspectEditModal extends EditModal {

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
      ProspectActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => this.updateProspect(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  updateProspect() {
    ProspectActions.updateProspect(this.props.pairing);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    var pairing = this.props.pairing;
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'General Information'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          <CardInput
            action={(event) => ProspectActions.storeValue(event.target.value)}
            errors={pairing.errors[pairing.key]}
            focus={true}
            label={pairing.key}
            value={pairing.value} />
        </div>
      </div>
    );
  }
}
