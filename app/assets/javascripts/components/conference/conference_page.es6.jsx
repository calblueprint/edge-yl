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

  static get defaultProps() {
    return {
      id: 1,
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
      placeholder: {
        width: '196px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(ConferenceStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    ConferenceStore.listen(this._listener);
    ProfileActions.fetchProfile();
    ConferenceActions.fetchConference(this.props.id);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    ConferenceStore.unlisten(this._listener);
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
    console.log(this.state.conference);
    return (
      <div style={StyleConstants.pages.default}>
        {this.renderOverlay()}
        <Header toggleSidebar={() => this.toggleSidebar()} />
        <div style={this.styles.container}>
          <Sidebar
            hidden={this.state.sidebar}
            profile={this.state.profile} />
          <ConferenceCard conference={this.state.conference}/>
          <GroupsGrid groups={this.state.conference.groups} />
          <div style={this.styles.placeholder}></div>
        </div>
      </div>
    );
  }
}
