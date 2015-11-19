class StudentPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = null;
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(StudentStore.getState());
  }

  componentDidMount() {
    this._listener = StudentStore.listen((state) => this.setState(state));
    StudentActions.fetchStudent(this.props.id);
  }

  componentWillUnmount() {
    StudentStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  hideOverlay(response) {
    if (response) {
      this.setState({ overlay: false, student: response });
    } else {
      this.setState({ overlay: false });
    }
  }

  toggleSidebar(event) {
    StudentsActions.toggleSidebar(!this.state.sidebar);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
    if (this.state.overlay.active) {
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
        <Header toggleSidebar={() => this.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <StudentGrid student={this.state.student} />
          <StudentComments
            showOverlay={(type, callback) => this.showOverlay(type, callback)}
            id={this.props.id} />
        </div>
      </div>
    );
  }
}

