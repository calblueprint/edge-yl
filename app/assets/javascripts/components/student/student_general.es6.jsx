class StudentGeneral extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
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
          label={'Gender'}
          value={student.gender} />
        <CardAttribute
          label={'Shirt size'}
          value={student.shirt_size} />
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
