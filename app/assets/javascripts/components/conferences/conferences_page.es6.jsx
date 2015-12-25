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
    ConferencesActions.fetchConferences(this.props.page);
    ProfileActions.fetchProfile();
  }

  componentWillUnmount() {
    ConferencesStore.unlisten(this._listener);
    ProfileStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showOverlay() {
    // TODO(Warren): Fix constants below.
    ConferencesActions.storeOverlay(
      true,
      TypeConstants.actions.edit,
      TypeConstants.conference
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
    if (this.state.overlay.active) {
      return (
        <ConferencesPageOverlay
          overlay={this.state.overlay}
          template={this.state.template} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header
          active={true}
          profile={this.state.profile} />
        <div style={StyleConstants.pages.container}>
          <Sidebar
            active={this.state.profile.has_sidebar}
            profile={this.state.profile} />
          <div style={StyleConstants.pages.content}>
            <PageHeader
              action={() => this.showOverlay()}
              content={'New'}
              clickable={true}
              label={'Conferences'} />
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
