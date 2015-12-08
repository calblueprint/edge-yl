class SchoolsPage extends Component {

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
    this.setState(SchoolsStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    SchoolsStore.listen(this._listener);
    ProfileActions.fetchProfile();
    SchoolsActions.fetchSchools(this.props.page);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    SchoolsStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header
          active={true}
          profile={this.state.profile} />
        <div style={this.styles.container}>
          <Sidebar
            active={this.state.profile.has_sidebar}
            profile={this.state.profile} />
          <div style={this.styles.body}>
            <SchoolsGrid schools={this.state.schools} />
            <PageNavigator
              route={RouteConstants.schools.index}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
