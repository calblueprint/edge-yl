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
    var responsibility = this.props.student.responsibility;
    if (responsibility) {
      return (
        <Clickable
          content={`${responsibility.user.first_name} ${responsibility.user.last_name}`}
          route={RouteConstants.users.show(responsibility.user.id)}
          type={'h6'} />
      );
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
