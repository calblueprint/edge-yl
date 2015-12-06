class GroupsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      conferenceId: React.PropTypes.number.isRequired,
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
  renderGroup(conferenceId, group) {
    return (
      <GroupsCard
        key={group.id}
        conferenceId={conferenceId}
        group={group} />
    );
  }

  renderGroups() {
    return this.props.groups.map((group) => this.renderGroup(this.props.conferenceId, group));
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderGroups()}
      </div>
    );
  }
}
