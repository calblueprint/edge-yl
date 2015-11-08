class StudentPage extends Component {

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

  static get defaultState() {
    return {
      sidebar: true,
      overlay: false,
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingTop: '48px',
        paddingLeft: '196px',
        paddingRight: '196px',
      },
    };
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  renderOverlay(event) {
    this.setState({ overlay: true });
  }

  closeOverlay(event) {
    this.setState({ overlay: false });
  }

  render() {
    student = JSON.parse(this.props.student);
    return (
      <div style={StyleConstants.pages.default}>
        <PageOverlay
          shouldShow={this.state.overlay}
          closeOverlay={this.closeOverlay.bind(this)} />
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid student={student}
            renderOverlay={this.renderOverlay.bind(this)} />
          <StudentComments
            comments={student.student_comments} />
        </div>
      </div>
    );
  }
}

