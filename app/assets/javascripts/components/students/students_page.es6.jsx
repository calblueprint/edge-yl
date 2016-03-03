class StudentsPage extends Component {

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
      query: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(StudentsStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    StudentsStore.listen(this._listener);
    ViewStore.listen(this._listener);
    StudentsActions.attachListener();
    StudentsActions.fetchStudents(this.props.page, this.props.query);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    StudentsStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => StudentsActions.exportStudents(),
        content: 'Export',
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
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <div style={StyleConstants.pages.content}>
            <PageHeader
              options={this.generateOptions()}
              title={'Students'}
              type={TypeConstants.pages.students} />
            <StudentsGrid
              media={this.state.media}
              students={this.state.students}
              type={TypeConstants.students.default} />
            <PageNavigator
              action={(page) => StudentsActions.storePage(page)}
              pagination={this.state.pagination} />
            <StudentsSidebar
              filters={this.state.filters}
              sorts={this.state.sorts} />
          </div>
        </div>
      </div>
    );
  }
}
