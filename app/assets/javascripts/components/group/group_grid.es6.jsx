class GroupGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      group: React.PropTypes.object.isRequired,
      media: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  render() {
    return (
      <div style={StyleConstants.containers.grid}>
        <GroupCard
          group={this.props.group}
          media={this.props.media}
          target={TypeConstants.group.general} />
        <GroupCard
          group={this.props.group}
          media={this.props.media}
          target={TypeConstants.group.leadership} />
        <PageHeader label={'Students in this group'} />
        <StudentsGrid
          media={this.props.media}
          students={this.props.group.students} />
      </div>
    );
  }
}
