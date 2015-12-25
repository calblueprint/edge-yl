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
      template: React.PropTypes.object.isRequired,
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
  // Helpers
  // --------------------------------------------------
  updateSchool() {
    SchoolActions.updateSchool(
      this.props.school,
      this.props.template
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderBody() {
    return (
      <div style={this.styles.section}>
        <CardHeader
          action={() => this.updateSchool()}
          content={'General Information'}
          icon={TypeConstants.icons.save} />
        <SchoolGeneralEdit template={this.props.template} />
      </div>
    );
  }
}
