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
      callback: () => null,
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

  hideOverlay(response) {
    if (response) {
      this.setState({ overlay: false, student: response });
    } else {
      this.setState({ overlay: false });
    }
  }

  showOverlay(type, callback) {
    this.setState({ overlay: true, type: type, callback: callback});
  }

  toggleSidebar(event) {
    this.setState({ sidebar: !this.state.sidebar });
  }

  renderOverlay() {
    if (this.state.overlay) {
      return (
        <PageOverlay
          hideOverlay={(response) => this.hideOverlay(response)}
          student={this.state.student}
          type={this.state.type}
          callback={(this.state.callback == null) ? () => null : this.state.callback }
          {...this.props} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        {this.renderOverlay()}
        <Header
          toggleSidebar={() => this.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid
            showOverlay={(type, callback) => this.showOverlay(type, callback)}
            student={this.state.student} />
          <StudentComments
            showOverlay={(type, callback) => this.showOverlay(type, callback)}
            id={this.props.id} />
        </div>
      </div>
    );
  }
}

