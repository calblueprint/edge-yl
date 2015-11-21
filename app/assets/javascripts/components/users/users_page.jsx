class UsersPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = null;
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
      },
      body: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        paddingLeft: '12px',
        paddingRight: '208px',
        overflow: 'scroll',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------

  componentWillMount() {
    this.setState(UsersStore.getState());
  }

  componentDidMount() {
    this._listener = UsersStore.listen((state) => this.setState(state));
    UsersActions.fetchUsers();
  }

  componentWillUnmount() {
    UsersStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  toggleSidebar(event) {
    UsersActions.toggleSidebar(!this.state.sidebar);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header
          toggleSidebar={() => this.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar shouldShow={this.state.sidebar} />
          <div style={this.styles.body}>
            <UsersGrid {...this.props} />
          </div>
        </div>
      </div>
    );
  }
}
