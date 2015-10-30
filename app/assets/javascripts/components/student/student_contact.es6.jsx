class StudentContact extends Component {

  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {},
      school: {},
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
      heading: {
        fontSize: StyleConstants.fonts.sizes.small,
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
          <Clickable
            content={`${student.school}}`}
            route={RouteConstants.students.show(student.id)}
            styles={this.styles.heading}
            type={'h3'} />
        </div>
    );
  }
}
