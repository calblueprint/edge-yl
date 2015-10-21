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
      <div>
        <span>{'Contact'}</span>
        <div style={this.styles.container}>
          {student.phone_number}
          {student.home_address}
          {student.email}
        </div>
        <span>{'School'}</span>
          {student.school}
          {student.school_address}
      </div>
    );
  }
}
