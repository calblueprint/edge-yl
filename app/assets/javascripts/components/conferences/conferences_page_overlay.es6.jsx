class ConferencesPageOverlay extends PageOverlay {

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
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick() {
    if (event.target === this._node) {
      ConferencesActions.storeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    if (this.props.overlay.type === TypeConstants.overlay.type.edit) {
      return (
        <StudentEditModal
          overlay={this.props.overlay}
          student={this.props.student}
          template={this.props.template} />
      );
    } else {
      return (
        <StudentCreateModal
          overlay={this.props.overlay}
          profile={this.props.profile}
          student={this.props.student} />
      );
    }
  }

  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <Clickable
          action={() => ConferencesActions.storeOverlay(false)}
          icon={TypeConstants.icons.close}
          styles={this.clickableStyles}
          type={'i'} />
        {this.renderModal()}
      </div>
    );
  }
}
