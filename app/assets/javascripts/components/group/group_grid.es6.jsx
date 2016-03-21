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
  // Helpers
  // --------------------------------------------------
  storePairing(key) {
    if (key == 'student') {
      var group = this.props.group;
      GroupActions.storePairing({
        id: group.id,
        key: key,
        model: 'student',
        type: 'search',
        value: '',
      });
    }
  }

  StudentsOptions() {
    return [
      {
        action: () => this.storePairing('student'),
        content: 'Add Student',
      },
    ];
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
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
        <GridHeader
          options={this.StudentsOptions()}
          title={'Students in this group'} />
        <StudentsGrid
          editable={this.props.editable}
          media={this.props.media}
          students={this.props.group.students}
          type={TypeConstants.students.group} />
      </div>
    );
  }
}
