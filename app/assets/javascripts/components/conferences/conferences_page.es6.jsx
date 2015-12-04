class ConferencesPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
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
      },
      body: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        paddingLeft: '12px',
        paddingRight: '208px',
        overflow: 'scroll',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    ProfileActions.fetchProfile();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header toggleSidebar={(event) => StudentsActions.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar
            hidden={this.state.sidebar}
            profile={this.state.profile} />
          <div style={this.styles.body}>
          </div>
        </div>
      </div>
    );
  }
}
