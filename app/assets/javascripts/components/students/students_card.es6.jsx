class StudentsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderSchool() {
    var school = this.props.student.school;
    if (school) {
      return (
        <CardAttribute
          clickable={true}
          label={'School'}
          route={RouteConstants.schools.show(school.id)}
          type={'h5'}
          value={school.name} />
      );
    } else {
      return <CardAttribute label={'School'} />;
    }
  }

  renderEditHeader() {
    if (this.props.clickable) {
      return (
        <div>
          <Clickable
            action=
            content=
            styles={this.clickableStyles}
            type={'i'} />
        </div>
      );
    }
  }

  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.index(this.props.media)}>
        <CardAttribute
          clickable={true}
          label={'Name'}
          route={RouteConstants.students.show(student.id)}
          type={'h4'}
          value={student.full_name} />
        <CardAttribute
          label={'Cell phone'}
          value={student.cell_phone} />
        <CardAttribute
          label={'Email'}
          value={student.email} />
        <CardAttribute
          label={'Placement'}
          value={student.is_primary ? 'Primary' : 'Secondary'} />
        <CardAttribute
          label={'Flagged?'}
          value={student.is_flagged ? 'Yes' : 'No'} />
        <CardAttribute
          label={'Status'}
          value={student.registration_status} />
        {this.renderSchool()}
      </div>
    );
  }
}

