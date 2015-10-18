class StudentPreview extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.shape.isRequired,
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
        flexDirection: 'column',
        flex: '1',
        position: 'relative',
        padding: '12px',
      },
    };
  }

  render() {
    var student = this.props.student;
    return (
      <div style={this.styles.container}>
        {student.first_name + ' ' + student.last_name}
        {student.birthday + ' ' + student.age + ' years old'}
      </div>
    );
  }
}
