class StudentContact extends Component {

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
      heading: {
        fontSize: '16px',
      },
    };
  }

  render() {
    var student = this.props.student;
    return (
        <div style={this.styles.container}>
          <h2 style={this.styles.heading}>{'Contact'}</h2>
            {student.phone_number}
            {student.home_address}
            {student.email}
          <h2 style={this.styles.heading}>{'School'}</h2>
            {student.school}
            {student.school_address}
        </div>
    );
  }
}
