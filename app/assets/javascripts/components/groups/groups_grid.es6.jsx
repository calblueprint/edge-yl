class GroupsGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool,
      groups: React.PropTypes.array.isRequired,
      media: React.PropTypes.string.isRequired,
      type: React.PropTypes.oneOf([
        TypeConstants.groups.conference,
        TypeConstants.groups.default,
      ]).isRequired,
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
        media={this.props.media}
        type={this.props.type} />
    );
  }

  renderGroups() {
    return this.props.groups.map((group) => this.renderGroup(group));
  }

  renderEmpty() {
    if (!this.props.groups.length) {
      return (
        <GridEmpty
          content={'There are currently no groups in this conference.'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        {this.renderGroups()}
        {this.renderEmpty()}
      </div>
    );
  }
}
