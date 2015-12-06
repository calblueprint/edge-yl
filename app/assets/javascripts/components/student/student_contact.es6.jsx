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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '18px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var student = this.props.student;
    return (
        <div style={this.styles.container}>
          <h4>{'Contact'}</h4>
          <h6>{student.cell_phone}</h6>
          <h6>{student.home_phone}</h6>
          <h6>{student.email}</h6>
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
