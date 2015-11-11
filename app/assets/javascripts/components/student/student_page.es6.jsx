class StudentPage extends Component {

  static get propTypes() {
    return {
      id: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
      id: 1,
    };
  }

  static get defaultState() {
    return {
      overlay: false,
      sidebar: true,
      student: { school: {} },
      type: 'preview',
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

  componentDidMount() {
    resolve = (response) => this.setState({ student: response });
    Requester.get(ApiConstants.students.show(this.props.id), resolve);
  }

  hideOverlay(event) {
    this.setState({ overlay: false });
  }

  showOverlay(type) {
    this.setState({ overlay: true, type: type });
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  renderOverlay() {
    if (this.state.overlay) {
      return (
        <PageOverlay
          hideOverlay={() => this.hideOverlay()}
          student={this.state.student}
          type={this.state.type} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        {this.renderOverlay()}
        <Header
          toggleSidebar={this.toggleSidebar.bind(this)} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid student={this.state.student}
            showOverlay={() => this.showOverlay()} />
          <StudentComments
            comments={this.state.student.comments} />
        </div>
      </div>
    );
  }
}

