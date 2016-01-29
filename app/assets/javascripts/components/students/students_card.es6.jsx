class StudentsCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      media: React.PropTypes.string.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      header: {
        display: 'flex',
        justifyContent: 'flex-end',
        width: '100%',
        marginBottom: '5px',
        borderBottom: 'solid #D6D6D6 1px',
      }
    }
  }

  get clickableStyles() {
    return {
      default: {
        display: 'inline',
        top: '0px',
        paddingBottom: '5px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  deleteStudentFromGroup() {
    GroupActions.deleteStudent(this.props.student.id);
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
          type={'h6'}
          value={school.name} />
      );
    } else {
      return <CardAttribute label={'School'} />;
    }
  }

  renderClickable() {
    if (this.props.editable) {
      return (
        <div style={this.styles.header}>
          <Clickable
            action={() => this.deleteStudentFromGroup()}
            icon={TypeConstants.icons.close}
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
        {this.renderClickable()}
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

