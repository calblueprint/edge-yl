class SchoolGrid extends Component {

 // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      school: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.grids.wrap}>
        <SchoolCard
          editable={this.props.editable}
          media={this.props.media}
          school={this.props.school}
          target={TypeConstants.school.general} />
        <SchoolCard
          editable={this.props.editable}
          media={this.props.media}
          school={this.props.school}
          target={TypeConstants.school.contact} />
        <GridHeader label={'Students in this school'} />
        <StudentsGrid
          media={this.props.media}
          students={this.props.school.students} />
      </div>
    );
  }
}
