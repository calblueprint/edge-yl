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
    var school = this.props.school;
    return (
      <div style={StyleConstants.grids.wrap}>
        <SchoolCard
          editable={this.props.editable}
          media={this.props.media}
          school={school}
          target={TypeConstants.school.general} />
        <SchoolCard
          editable={this.props.editable}
          media={this.props.media}
          school={school}
          target={TypeConstants.school.contact} />
        <GridHeader label={'Secondary contacts in this school'} />
        <ContactsGrid
          media={this.props.media}
          contacts={school.secondary_contacts} />
        <GridHeader label={'Students in this school'} />
        <StudentsGrid
          media={this.props.media}
          students={this.props.school.students} />
      </div>
    );
  }
}
