class ProfilePage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
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
  renderOverlay() {
    if (this.state.overlay.active) {
      return (
        <ProfilePageOverlay
          overlay={this.state.overlay}
          profile={this.state.profile}
          template={this.state.template} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header active={true} />
        <div style={StyleConstants.pages.container}>
          <Sidebar
            active={this.state.profile.has_sidebar}
            profile={this.state.profile} />
          <div style={StyleConstants.pages.content}>
            <ProfileGrid profile={this.state.profile} />
          </div>
        </div>
      </div>
    );
  }
}

