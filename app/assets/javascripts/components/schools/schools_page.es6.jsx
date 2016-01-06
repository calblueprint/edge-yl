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
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(SchoolsStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    SchoolsStore.listen(this._listener);
    ViewStore.listen(this._listener);
    SchoolsActions.fetchSchools(this.props.page);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    SchoolsStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        content: 'New',
        route: RouteConstants.forms.student,
      },
    ];
  }

  selectProfile() {
    return this.state.profile ?
           this.state.profile :
           this.props.profile;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
      <Header
        active={true}
        profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <Sidebar profile={this.selectProfile()} />
          <div style={StyleConstants.pages.content}>
            <PageHeader
              label={'Schools'}
              options={this.generateOptions()} />
            <SchoolsGrid
              media={this.state.media}
              schools={this.state.schools} />
            <PageNavigator
              route={RouteConstants.schools.index}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
