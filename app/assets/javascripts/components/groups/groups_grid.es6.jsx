class GroupsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      groups: React.PropTypes.array.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderGroup(group) {
    return (
      <GroupsCard
        group={group}
        key={group.id}
        media={this.props.media} />
    );
  }

  renderGroups() {
    return this.props.groups.map((group) => this.renderGroup(group));
  }

  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <PageHeader
          clickable={true}
          content={'New'}
          label={'Groups in this conference'} />
        {this.renderGroups()}
      </div>
    );
  }
}
