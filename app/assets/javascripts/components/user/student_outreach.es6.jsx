class StudentOutreach extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      student: React.PropTypes.object.isRequired,
    };
  }

  static get defaultProps() {
    return {
      student: {}
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
        padding: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderResponsibility() {
    var student = this.props.student;
    if (student.responsibility) {
      return (
          <Clickable
            content={'Volunteer'}
            route={RouteConstants.users.show(student.responsibility.user.id)}
            type={'h6'} />
      )
    }
  }
  render() {
    return (
      <div style={this.styles.container}>
        {this.renderResponsibility()}
      </div>
    );
  }
}
