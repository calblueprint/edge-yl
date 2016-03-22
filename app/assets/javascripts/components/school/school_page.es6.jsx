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
        action: () => ViewActions.storeEditability(),
        content: this.state.editable ? 'Finish' : 'Edit',
      },
      {
        action: () => {
          var contact = this.props.school.primary_contact;
          StudentActions.createDraft(this.props.profile.email, contact.email);
        },
        content: 'Email',
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
          pairing={this.state.pairing}
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
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <Toast toast={this.state.toast} />
        <div style={StyleConstants.pages.default}>
          <div style={StyleConstants.pages.content}>
            <GridHeader
              options={this.generateOptions()}
              title={`School: ${school.name}`} />
            <SchoolGrid
              editable={this.state.editable}
              media={this.state.media}
              school={school} />
            <PageComments
              profile={this.selectProfile()}
              school={this.state.school}
              type={TypeConstants.comments.school} />
          </div>
        </div>
      </div>
    );
  }
}
