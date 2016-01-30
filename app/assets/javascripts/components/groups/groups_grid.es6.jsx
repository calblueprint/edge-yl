class GroupsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      groups: React.PropTypes.array.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  static get defaultProps() {
    return {
      editable: false,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderGroup(group) {
    return (
      <GroupsCard
        editable={this.props.editable}
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
        {this.renderGroups()}
      </div>
    );
  }
}
