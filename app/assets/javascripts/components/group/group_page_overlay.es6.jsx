class GroupPageOverlay extends PageOverlay {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groupables: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeOverlay() {
    GroupActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    return (
      <GroupEditModal
        groupables={this.props.groupables}
        template={this.props.template} />
    );
  }
}
