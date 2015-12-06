class StudentPageOverlay extends PageOverlay {

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
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick() {
    if (event.target === this._node) {
      StudentActions.storeOverlay(false);
    }
  }

  //  --------------------------------------------------
  //  Render
  //  --------------------------------------------------
  renderModal() {
    if (this.props.overlay.type === TypeConstants.overlay.type.edit) {
      return (
        <StudentEditModal
          overlay={this.props.overlay}
          student={this.props.student} />
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
          action={() => StudentActions.storeOverlay(false)}
          icon={TypeConstants.icons.close}
          styles={this.clickableStyles}
          type={'i'} />
        {this.renderModal()}
      </div>
    );
  }
}
