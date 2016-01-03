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
  storeTemplate(type, key, options) {
    StudentActions.storeTemplate(
      true,
      type,
      key,
      this.props.student[key],
      options
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
      <div style={StyleConstants.cards.body}>
        <CardAttribute
          label={'First name'}
          value={student.first_name} />
        <CardAttribute
          label={'Preferred name'}
          value={student.preferred_name} />
        <CardAttribute
          label={'Last name'}
          value={student.last_name} />
        <CardAttribute
          label={'Birthday'}
          value={student.birthday} />
        <CardAttribute
          action={() => this.storeTemplate('dropdown', 'gender', student.gender_choices)}
          editable={this.props.editable}
          label={'Gender'}
          value={Helpers.humanize(student.gender)} />
        <CardAttribute
          label={'Shirt size'}
          value={Helpers.capitalize(student.shirt_size)} />
        <CardAttribute
          label={'Placement'}
          value={student.is_primary ? 'Primary' : 'Secondary'} />
        <CardAttribute
          label={'Flagged?'}
          value={student.is_flagged ? 'Yes' : 'No'} />
        <br />
        <h4>{'School'}</h4>
        <Clickable
          content={student.school.name}
          route={RouteConstants.schools.show(student.school.id)}
          type={'h6'} />
      </div>
    );
  }
}
