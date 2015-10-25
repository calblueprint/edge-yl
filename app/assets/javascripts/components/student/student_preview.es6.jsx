class StudentPreview extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        padding: '12px',
      },
    };
  }

  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        <Clickable
          content={student.first_name + ' ' + student.last_name}
          route={RouteConstants.students}/>        
        {student.birthday + ' ' + student.age + ' years old'}
      </div>
    );
  }
}
