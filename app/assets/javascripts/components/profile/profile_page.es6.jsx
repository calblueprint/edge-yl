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
    ProfileStore.fetchProfile();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={this.styles.container}>
        <Header />
        <div style={this.styles.section}>
          <Sidebar hidden={this.state.sidebar} />
          <ProfileCards currentUser={this.props.currentUser} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

