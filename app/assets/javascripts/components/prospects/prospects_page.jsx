class ProspectsPage extends Component {

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
    this.setState(ProfileStore.getState());
    this.setState(ProspectsStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    ProspectsStore.listen(this._listener);
    ViewStore.listen(this._listener);
    ProspectsActions.fetchProspects(this.props.page);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    ProspectsStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  changePage(page) {
    window.location = RouteConstants.prospects.index(page);
  }

  generateOptions() {
    return [
      {
        action: () => ProspectsActions.storeTemplate(TypeConstants.models.prospects),
        content: 'New',
      },
      {
        action: () => ViewActions.storeEditability(),
        content: this.state.editable ? 'Finish' : 'Edit',
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
      return <ProspectsPageOverlay template={this.state.template} />;
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <div style={StyleConstants.pages.content}>
            <GridHeader
              options={this.generateOptions()}
              title={'Prospects'} />
            <ProspectsGrid
              editable={this.state.editable}
              media={this.state.media}
              prospects={this.state.prospects} />
            <PageNavigator
              action={(page) => this.changePage(page)}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
