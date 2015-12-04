class ProfilePageOverlay extends PageOverlay {

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
      profile: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      overlay: {
        active: false,
        target: TypeConstants.overlay.target.preview,
        type: TypeConstants.overlay.type.edit,
      },
      profile: {},
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick(event) {
    if (event.target === this._node) {
      ProfileActions.storeOverlay(false);
    }
  }

  //  --------------------------------------------------
  //  Render
  //  --------------------------------------------------
  renderModal() {
    return (
      <UserEditModal
        overlay={this.props.overlay} />
    );
  }

  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <Clickable
          action={(event) => ProfileActions.storeOverlay(false)}
          icon={TypeConstants.icons.close}
          styles={this.clickableStyles}
          type={'i'} />
        {this.renderModal()}
      </div>
    );
  }
}
