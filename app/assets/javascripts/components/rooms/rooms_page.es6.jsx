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
      page: React.PropTypes.number.isRequired,
      profile: React.PropTypes.object.isRequired,
      query: React.PropTypes.object.isRequired,
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
    RoomsActions.fetchRooms(this.props.page, this.props.query);
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
  generateOption(conference_id) {
    this.props.query['conference_id'] = conference_id;
    return {
      content: conference_id,
      route: RouteConstants.rooms.index(this.props.page, this.props.query)
    }
  }

  generateOptions() {
    return this.props.query['conference_ids'].map((conference_id) => this.generateOption(conference_id))
  }

  changePage(page) {
    window.location = RouteConstants.rooms.index(page, this.props.query);
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
    console.log('RoomsPage: ', this.props.query['conference_id'])
    console.log(this.state.rooms)
    return (
      <div style={StyleConstants.pages.wrapper}>
      <Header profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <Sidebar profile={this.selectProfile()} />
          <div style={StyleConstants.pages.content}>
            <GridHeader
              label={'Rooms'}
              options={this.generateOptions()} />
            <RoomsGrid
              media={this.state.media}
              rooms={this.state.rooms} />
            <PageNavigator
              action={(page) => this.changePage(page)}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
