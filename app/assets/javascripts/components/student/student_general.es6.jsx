class StudentGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      editable: React.PropTypes.bool.isRequired,
      student: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  storeTemplate(key, choices) {
    var student = this.props.student;
    StudentActions.storeTemplate({
      choices: choices,
      id: student.id,
      key: key,
      model: 'student',
      type: choices ? 'dropdown' : 'input',
      value: student[key],
    });
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

  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          action={() => this.storeTemplate('first_name')}
          editable={this.props.editable}
          label={'First name'}
          value={student.first_name} />
        <CardAttribute
          action={() => this.storeTemplate('preferred_name')}
          editable={this.props.editable}
          label={'Preferred name'}
          value={student.preferred_name} />
        <CardAttribute
          action={() => this.storeTemplate('last_name')}
          editable={this.props.editable}
          label={'Last name'}
          value={student.last_name} />
        <CardAttribute
          action={() => this.storeTemplate('birthday')}
          editable={this.props.editable}
          label={'Birthday'}
          value={student.birthday} />
        <CardAttribute
          action={() => this.storeTemplate('gender', student.gender_choices)}
          editable={this.props.editable}
          label={'Gender'}
          value={Helpers.humanize(student.gender)} />
        <CardAttribute
          action={() => this.storeTemplate('shirt_size', student.shirt_sizes)}
          editable={this.props.editable}
          label={'Shirt size'}
          value={Helpers.capitalize(student.shirt_size)} />
        <CardAttribute
          action={() => this.storeTemplate('is_primary', ['true', 'false'])}
          editable={this.props.editable}
          label={'Placement'}
          value={student.is_primary ? 'Primary' : 'Secondary'} />
        <CardAttribute
          action={() => this.storeTemplate('is_flagged', ['true', 'false'])}
          editable={this.props.editable}
          label={'Flagged?'}
          value={student.is_flagged ? 'Yes' : 'No'} />
        {this.renderSchool()}
      </div>
    );
  }
}
