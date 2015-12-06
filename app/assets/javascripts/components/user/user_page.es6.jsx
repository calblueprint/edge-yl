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
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flex: '1',
        paddingTop: '48px',
        paddingLeft: '196px',
        paddingRight: '196px',
      },
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
      <div style={StyleConstants.pages.default}>
        <Header active={true} />
        <div style={this.styles.container}>
          <Sidebar
            active={this.state.sidebar}
            profile={this.state.profile} />
          <ResponsibilitiesGrid responsibilities={this.state.user.responsibilities} />
        </div>
      </div>
    );
  }
}

