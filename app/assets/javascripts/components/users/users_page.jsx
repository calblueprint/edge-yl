class UsersPage extends Component {

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
      page: React.PropTypes.number.isRequired,
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
    this.setState(ProfileStore.getState());
    this.setState(UsersStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    UsersStore.listen(this._listener);
    ProfileActions.fetchProfile();
    UsersActions.fetchUsers(this.props.page);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    UsersStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header active={true} />
        <div style={this.styles.container}>
          <Sidebar
            active={this.state.profile.has_sidebar}
            profile={this.state.profile} />
          <div style={this.styles.body}>
            <UsersGrid users={this.state.users} />
            <PageNavigator
              route={RouteConstants.users.index}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
