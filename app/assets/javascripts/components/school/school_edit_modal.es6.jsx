class SchoolEditModal extends EditModal {

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
  handleClick(event) {
    if (event.target === this._node) {
      SchoolActions.storeOverlay(false);
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.updateStudent()}
          content={'Outreach Information'}
          icon={TypeConstants.icons.save} />
        <SchoolPreviewEdit school={this.props.school} />;
      </div>
    );
  }
}
