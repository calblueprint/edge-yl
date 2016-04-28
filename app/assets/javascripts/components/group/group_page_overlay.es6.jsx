class GroupPageOverlay extends PageOverlay {
  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
      groupablesUser: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      groupablesVolunteer: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
      pairing: React.PropTypes.object.isRequired,
      results: React.PropTypes.array.isRequired,
      savedSearch: React.PropTypes.object.isRequired,
      search: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  closeOverlay() {
    GroupActions.closeOverlay();
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderModal() {
    if (this.props.pairing.model == TypeConstants.models.leadership) {
      return (
        <GroupEditModal
          groupablesUser={this.props.groupablesUser}
          groupablesVolunteer={this.props.groupablesVolunteer}
          pairing={this.props.pairing} />
      );
    } else if (this.props.pairing.model == TypeConstants.models.student) {
      return (
        <SearchModal
          group={this.props.group}
          model={TypeConstants.models.student}
          pairing={this.props.pairing}
          savedSearch={this.props.savedSearch}
          search={this.props.search}
          results={this.props.results} />
      );
    }
  }
}
