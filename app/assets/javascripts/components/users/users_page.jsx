class UsersPage extends Component {

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
    UsersStore.listen(this._listener);
    UsersActions.fetchUsers();
  }

  componentWillUnmount() {
    UsersStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header toggleSidebar={() => UsersActions.toggleSidebar()} />
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
