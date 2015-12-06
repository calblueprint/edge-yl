class ProfilePage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        height: '100vh',
      },
      placeholder: {
        width: '196px',
      },
      section: {
        display: 'flex',
        flex: '1',
        paddingLeft: '196px',
      },
    };
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
          profile={this.state.profile} />
      );
    }
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderOverlay()}
        <Header active={true} />
        <div style={this.styles.section}>
          <Sidebar
            active={this.state.sidebar}
            profile={this.state.profile} />
          <ProfileCards profile={this.state.profile} />
          <div style={this.styles.placeholder} />
        </div>
      </div>
    );
  }
}

