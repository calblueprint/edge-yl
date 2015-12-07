class StudentContact extends Component {

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
        <h4>{'Contact'}</h4>
        <h6>{student.email}</h6>
        <h6>{student.cell_phone}</h6>
        <h6>{student.home_phone}</h6>
        <h6>{student.home_address}</h6>
        <br />
        <h4>{'School'}</h4>
        <Clickable
          content={student.school.name}
          route={RouteConstants.schools.show(student.school.id)}
          type={'h6'} />
        <h6>{student.school.address}</h6>
      </div>
    );
  }
}
