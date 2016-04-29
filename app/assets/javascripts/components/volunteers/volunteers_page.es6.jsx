class VolunteersPage extends Component {

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
      conference: React.PropTypes.object.isRequired,
      conferences: React.PropTypes.array.isRequired,
      page: React.PropTypes.number.isRequired,
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(VolunteersStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    VolunteersStore.listen(this._listener);
    ViewStore.listen(this._listener);
    VolunteersActions.attachListener();
    VolunteersActions.fetchVolunteers(
      this.props.conference,
      this.props.page
    );
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    VolunteersStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  changePage(page) {
    window.location = RouteConstants.volunteers.index(page);
  }

  generateOptions() {
    return [
      {
        action: () => VolunteersActions.storeTemplate(TypeConstants.models.volunteer),
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
      return (
        <VolunteersPageOverlay
          conference={this.state.conference}
          template={this.state.template} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <div style={StyleConstants.pages.default}>
          <div style={StyleConstants.pages.content}>
            <GridHeader
              options={this.generateOptions()}
              title={'Volunteers'} />
            <VolunteersGrid
              media={this.state.media}
              volunteers={this.state.volunteers} />
            <PageNavigator
              action={(page) => this.changePage(page)}
              pagination={this.state.pagination} />
            <VolunteersSidebar
              conference={this.state.conference}
              conferences={this.props.conferences} />
          </div>
        </div>
      </div>
    );
  }
}
