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
    window.addEventListener('resize', (event) => console.log(document.documentElement.clientWidth))
    ProfileStore.listen(this._listener);
    StudentStore.listen(this._listener);
    ProfileActions.fetchProfile();
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
        <StudentPageOverlay
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
        <Header active={true} />
        <div style={this.styles.container}>
          <Sidebar
            active={this.state.sidebar}
            profile={this.state.profile} />
          <StudentGrid student={this.state.student} />
          <StudentComments comments={this.state.student.comments} />
        </div>
      </div>
    );
  }
}

