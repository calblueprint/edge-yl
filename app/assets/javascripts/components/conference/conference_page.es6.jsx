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
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        flex: '1',
        paddingTop: '48px',
        paddingLeft: '196px',
      },
      placeholder: {
        width: '196px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ConferenceStore.getState());
    this.setState(ProfileStore.getState());
  }

  componentDidMount() {
    ConferenceStore.listen(this._listener);
    ProfileStore.listen(this._listener);
    ConferenceActions.fetchConference(this.props.id);
    ProfileActions.fetchProfile();
  }

  componentWillUnmount() {
    ConferenceStore.unlisten(this._listener);
    ProfileStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
    if (this.state.overlay.active) {
      return (
        <div>Render Overlay</div>
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        {this.renderOverlay()}
        <Header
          active={true}
          profile={this.state.profile} />
        <div style={this.styles.container}>
          <Sidebar
            active={this.state.profile.has_sidebar}
            profile={this.state.profile} />
          <ConferenceCard conference={this.state.conference} />
          <GroupsGrid
            conferenceId={this.props.id}
            groups={this.state.conference.groups} />
          <div style={this.styles.placeholder} />
        </div>
      </div>
    );
  }
}
