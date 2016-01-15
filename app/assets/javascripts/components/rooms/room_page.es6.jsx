class RoomPage extends Component {

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
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(RoomStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    RoomStore.listen(this._listener);
    ViewStore.listen(this._listener);
    SchoolActions.fetchSchool(this.props.id);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    RoomStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => SchoolActions.toggleEditability(),
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
  render() {
    var room = this.state.room;
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header
          active={true}
          profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <Sidebar profile={this.selectProfile()} />
          <div style={StyleConstants.pages.content}>
            <GridHeader
              clickable={true}
              content={'Edit'}
              label={'Room'}
              options={this.generateOptions()}
              value={room.number} />
            <RoomGrid
              editable={this.state.editable}
              media={this.state.media}
              room={room} />
          </div>
        </div>
      </div>
    );
  }
}
