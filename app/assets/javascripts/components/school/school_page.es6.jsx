class SchoolPage extends Component {

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
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(SchoolStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    SchoolStore.listen(this._listener);
    ViewStore.listen(this._listener);
    SchoolActions.fetchSchool(this.props.id);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    SchoolStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => SchoolActions.toggleEditability(),
        content: this.state.editable ? 'Finish' : 'Edit',
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
  renderOverlay() {
  if (this.state.overlay) {
      return (
        <SchoolPageOverlay
          profile={this.selectProfile()}
          school={this.state.school}
          template={this.state.template} />
      );
    }
  }

  render() {
    var school = this.state.school;
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header
          active={true}
          profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <Sidebar profile={this.selectProfile()} />
          <div style={StyleConstants.pages.content}>
            <PageHeader
              clickable={true}
              content={'Edit'}
              label={'School'}
              options={this.generateOptions()}
              value={school.name} />
            <SchoolGrid
              editable={this.state.editable}
              media={this.state.media}
              school={school} />
            <PageComments
              comments={school.comments}
              type={TypeConstants.school.comment} />
          </div>
        </div>
      </div>
    );
  }
}
