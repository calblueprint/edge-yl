class GroupPageOverlay extends PageOverlay {
  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groupables: React.PropTypes.arrayOf(React.PropTypes.object).isRequired,
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
    if (this.props.pairing.model == 'group') {
      return (
        <GroupEditModal
          groupables={this.props.groupables}
          pairing={this.props.pairing} />
      );
    } else if (this.props.pairing.model == 'student') {
      return (
        <SearchModal
          model={'student'}
          pairing={this.props.pairing}
          savedSearch={this.props.savedSearch}
          search={this.props.search}
          results={this.props.results} />
      );
    }
  }
}
