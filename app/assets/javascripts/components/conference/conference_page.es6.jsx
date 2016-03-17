class ConferencePage extends Component {

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
    this.setState(ConferenceStore.getState());
    this.setState(ProfileStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ConferenceStore.listen(this._listener);
    ProfileStore.listen(this._listener);
    ViewStore.listen(this._listener);
    ConferenceActions.fetchConference(this.props.id);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ConferenceStore.unlisten(this._listener);
    ProfileStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateChoices() {
    return [
      {
        action: () => GroupsActions.exportGroups(this.state.conference.id),
        content: 'Export groups',
      },
      {
        action: () => RoomsActions.exportRooms(this.state.conference.id),
        content: 'Export rooms',
      },
      {
        action: () => ConferenceActions.assignStudentsToGroups(conference.id),
        content: 'Assign students to groups',
      },
      {
        action: () => ConferenceActions.assignStudentsToRooms(conference.id),
        content: 'Assign students to rooms',
      },
    ];
  }

  generateOptions() {
    return [
      {
        action: () => ViewActions.storeEditability(),
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
        <ConferencePageOverlay
          conference={this.state.conference}
          groupables={this.state.groupables}
          pairing={this.state.pairing}
          template={this.state.template}
          type={'conference'} />
      );
    }
  }

  render() {
    var conference = this.state.conference;
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <Toast toast={this.state.toast} />
        <div style={StyleConstants.pages.container}>
          <div style={StyleConstants.pages.content}>
            <GridHeader
              choices={this.generateChoices()}
              title={`Conference: ${conference.name}`}
              options={this.generateOptions()} />
            <ConferenceGrid
              conference={conference}
              editable={this.state.editable}
              media={this.state.media} />
          </div>
        </div>
      </div>
    );
  }
}
