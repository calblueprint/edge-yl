class CheckinPage extends Component {

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
      conferenceId: React.PropTypes.number.isRequired,
      conferences: React.PropTypes.array.isRequired,
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(CheckInStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    CheckInStore.listen(this._listener);
    ViewStore.listen(this._listener);
    CheckInActions.fetchConference(this.props.conferenceId);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    CheckInStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
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
    var conference = this.state.conference;
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <div style={StyleConstants.pages.default}>
          <div style={StyleConstants.pages.content}>
            <GridHeader title={`Check-in: ${conference.name}`} />
            <CheckinGrid
              conference={conference}
              editable={false}
              media={this.state.media}
              pagination={this.state.pagination}
              results={this.state.results}
              savedSearch={this.state.savedSearch}
              search={this.state.search}
              student={this.state.student} />
            <CheckinSidebar
              conference={this.state.conference}
              conferences={this.props.conferences} />
          </div>
        </div>
      </div>
    );
  }
}
