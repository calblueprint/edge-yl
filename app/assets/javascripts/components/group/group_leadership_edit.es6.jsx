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
    return {
      action: () => console.log(`${groupabale.full_name}: ${groupabale.id}`),
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
    console.log(this.generateOptions());
    return (
      <div style={StyleConstants.cards.body}>
        <CardDropdown options={this.generateOptions()} />
      </div>
    );
  }
}
