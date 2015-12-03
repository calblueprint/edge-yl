class GroupsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groups: React.PropTypes.array.isRequired,
    };
  }

  static get defaultProps() {
    return {
      groups: [],
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'wrap',
        justifyContent: 'space-around',
        alignContent: 'flex-start',
        flex: '1',
        padding: '0px 12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderGroup(group) {
    return (
      <GroupsCard
        key={group.id}
        group={group} />
    );
  }

  renderGroups() {
    return this.props.groups.map((group) => this.renderGroup(group));
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderGroups()}
      </div>
    );
  }
}
