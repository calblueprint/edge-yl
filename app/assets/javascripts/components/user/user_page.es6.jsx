class UserPage extends Component {

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
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(UserStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    UserStore.listen(this._listener);
    ProfileActions.fetchProfile();
    UserActions.fetchUser(this.props.id);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listner);
    UserStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
    if (this.state.overlay.active) {
      return (
        <PageOverlay
          overlay={this.state.overlay}
          profile={this.state.profile}
          user={this.state.user} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header
          active={true}
          profile={this.state.profile} />
        <div style={StyleConstants.pages.container}>
          <Sidebar
            active={this.state.profile.has_sidebar}
            profile={this.state.profile} />
          <div style={StyleConstants.pages.content}>
            <UserCard user={this.state.user} />
            <ResponsibilitiesGrid responsibilities={this.state.user.responsibilities} />
          </div>
        </div>
      </div>
    );
  }
}

