class SchoolGrid extends Component {

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => SchoolActions.storeTemplate(
          TypeConstants.models.contact,
          {
            is_primary: false,
            school_id: this.props.school.id,
          },
        ),
        content: 'New',
      },
    ];
  }

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
        <GridHeader
          options={this.generateOptions()}
          title={'Secondary contacts in this school'} />
        <ContactsGrid
          contacts={school.secondary_contacts}
          editable={this.props.editable}
          media={this.props.media} />
        <GridHeader title={'Students in this school'} />
        <StudentsGrid
          media={this.props.media}
          students={school.students}
          type={TypeConstants.students.school}
          typeId={school.id} />
        <GridHeader title={'Responsibilities'} />
        <ResponsibilitiesGrid
          editable={this.props.editable}
          media={this.props.media}
          responsibilities={school.responsibilities}
          type={TypeConstants.pages.school} />
      </div>
    );
  }
}
