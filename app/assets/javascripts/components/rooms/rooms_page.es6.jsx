class RoomsPage extends Component {

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
      conference: React.PropTypes.number.isRequired,
      conferences: React.PropTypes.array.isRequired,
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(RoomsStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    RoomsStore.listen(this._listener);
    ViewStore.listen(this._listener);
    RoomsActions.fetchRooms(this.props.conference);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    RoomsStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOption(id) {
    return {
      content: id,
      route: RouteConstants.rooms.index(id)
    }
  }

  generateOptions() {
    return ['1', '2'].map((id) => this.generateOption(id))
  }

  selectProfile() {
    return this.state.profile ?
           this.state.profile :
           this.props.profile;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
      <Header profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <Sidebar profile={this.selectProfile()} />
          <div style={StyleConstants.pages.content}>
            <PageHeader
              conference={this.props.conference}
              conferences={this.props.conferences}
              options={this.generateOptions()}
              title={'Rooms'}
              type={'rooms'} />
            <RoomsGrid
              media={this.state.media}
              rooms={this.state.rooms}
              type={TypeConstants.room.default} />
          </div>
        </div>
      </div>
    );
  }
}
