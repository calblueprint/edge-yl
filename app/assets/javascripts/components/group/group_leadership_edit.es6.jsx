class GroupLeadershipEdit extends Component {

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
  generateOption(groupabale) {
    // TODO(Warren): Don't set user_id manually.
    return {
      action: () => GroupActions.updateLeadership(groupabale.id, { user_id: 6 }),
      content: groupabale.full_name,
    };
  }

  generateOptions() {
    var groupables = this.props.groupables;
    return groupables.map((groupabale) => this.generateOption(groupabale));
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.cards.body}>
        <CardDropdown options={this.generateOptions()} />
      </div>
    );
  }
}
