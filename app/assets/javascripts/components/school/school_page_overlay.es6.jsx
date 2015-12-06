class SchoolPageOverlay extends PageOverlay {

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
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleClick() {
    if (event.target === this._node) {
      SchoolActions.storeOverlay(false);
    }
  }

  //  --------------------------------------------------
  //  Render
  //  --------------------------------------------------
  renderModal() {
    return (
      <SchoolEditModal
        overlay={this.props.overlay}
        school={this.props.school} />
    );
  }

  render() {
    return (
      <div ref={'container'} style={this.styles.container}>
        <Clickable
          action={() => SchoolActions.storeOverlay(false)}
          icon={'fa fa-times fa-2x'}
          styles={this.clickableStyles}
          type={'i'} />
        {this.renderModal()}
      </div>
    );
  }
}
