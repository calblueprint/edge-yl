class ProfileEditModal extends EditModal {

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
      ProfileActions.closeOverlay();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  updateProfile() {
    ProfileActions.updateProfile(this.props.pairing);
  }

  generateOptions() {
    return [
      {
        action: () => this.updateProfile(),
        icon: TypeConstants.icons.save,
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderChild() {
    var pairing = this.props.pairing;
    if (pairing.type === 'input') {
      return (
        <CardInput
          action={(event) => ProfileActions.storeValue(event.target.value)}
          errors={pairing.errors[pairing.key]}
          focus={true}
          label={pairing.key}
          type={pairing.key === 'birthday' ? 'date' : 'text'}
          value={pairing.value} />
      );
    }
  }

  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          content={'Profile Preview'}
          options={this.generateOptions()} />
        <div style={StyleConstants.cards.content}>
          {this.renderChild()}
        </div>
      </div>
    );
  }
}
