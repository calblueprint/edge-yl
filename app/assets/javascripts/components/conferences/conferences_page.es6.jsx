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
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ConferencesStore.getState());
    this.setState(ProfileStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ConferencesStore.listen(this._listener);
    ProfileStore.listen(this._listener);
    ViewStore.listen(this._listener);
    ConferencesActions.fetchConferences(this.props.page);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ConferencesStore.unlisten(this._listener);
    ProfileStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  changePage(page) {
    window.location = RouteConstants.conferences.index(page);
  }

  generateOptions() {
    return [
      {
        action: () => ConferencesActions.storeTemplate(),
        content: 'New',
      },
    ];
  }

  selectProfile() {
    return this.state.profile ?
           this.state.profile :
           this.props.profile;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
    if (this.state.overlay) {
      return <ConferencesPageOverlay template={this.state.template} />;
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <Sidebar profile={this.selectProfile()} />
          <div style={StyleConstants.pages.content}>
            <GridHeader
              label={'Conferences'}
              options={this.generateOptions()} />
            <ConferencesGrid
              conferences={this.state.conferences}
              media={this.state.media} />
            <PageNavigator
              action={(page) => this.changePage(page)}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
