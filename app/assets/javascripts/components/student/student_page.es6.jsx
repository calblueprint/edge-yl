class StudentPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
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
    this.setState(ProfileStore.getState());
    this.setState(StudentStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    StudentStore.listen(this._listener);
    ProfileActions.fetchProfile();
    StudentActions.fetchComments(this.props.id);
    StudentActions.fetchStudent(this.props.id);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    StudentStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------

  renderOverlay() {
    if (this.state.overlay.active) {
      return (
        <PageOverlay
          overlay={this.state.overlay}
          profile={this.state.profile}
          student={this.state.student} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        {this.renderOverlay()}
        <Header toggleSidebar={(event) => StudentActions.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar
            hidden={this.state.sidebar}
            profile={this.state.profile} />
          <StudentGrid student={this.state.student} />
          <StudentComments comments={this.state.comments} />
        </div>
      </div>
    );
  }
}

