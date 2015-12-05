class ConferencesPage extends Component {

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
      page: React.PropTypes.number.isRequired,
    };
  }

  static get defaultProps() {
    return {
      page: 1,
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
    this.setState(ConferencesStore.getState());
    this.setState(ProfileStore.getState());
  }

  componentDidMount() {
    ConferencesStore.listen(this._listener);
    ProfileStore.listen(this._listener);
    ConferencesActions.fetchConferences();
    ProfileActions.fetchProfile();
  }

  componentWillUnmount() {
    ConferencesStore.unlisten(this._listener);
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
            <ConferencesGrid conferences={this.state.conferences} />
            <PageNavigator
              route={RouteConstants.conferences.index}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
