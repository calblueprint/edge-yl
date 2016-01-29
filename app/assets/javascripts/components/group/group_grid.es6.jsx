class GroupGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
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
          editable={this.props.editable}
          group={this.props.group}
          media={this.props.media}
          target={TypeConstants.group.general} />
        <GroupCard
          editable={this.props.editable}
          group={this.props.group}
          media={this.props.media}
          target={TypeConstants.group.leadership} />
        <GridHeader label={'Students in this group'} />
        <StudentsGrid
          editable={this.props.editable}
          media={this.props.media}
          students={this.props.group.students} />
      </div>
    );
  }
}
