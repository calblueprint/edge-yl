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
    this.setState(MeStore.getState());
  }

  componentDidMount() {
    MeStore.listen(this._listener);
    MeActions.fetchMe(this.state.me);
  }

  componentWillUnmount() {
    MeStore.unlisten(this._listener);
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
          <ProfileCards profile={this.state.me} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}

