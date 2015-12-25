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
        <div style={StyleConstants.pages.container}>
          <Sidebar
            active={this.state.profile.has_sidebar}
            profile={this.state.profile} />
          <div style={StyleConstants.pages.content}>
            <PageHeader
              clickable={true}
              content={'New'}
              route={RouteConstants.forms.student}
              label={'Schools'} />
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
