class GroupPage extends Component {

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
      conferenceId: React.PropTypes.number.isRequired,
      id: React.PropTypes.number.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(ProfileStore.getState());
    this.setState(GroupStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    GroupStore.listen(this._listener);
    ViewStore.listen(this._listener);
    ProfileActions.fetchProfile();
    GroupActions.fetchGroup(this.props.conferenceId, this.props.id)
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    GroupStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderOverlay() {
    if (this.state.overlay.active) {
      return (
        <GroupPageOverlay
          overlay={this.state.overlay}
          template={this.state.template} />
      );
    }
  }

  render() {
    var group = this.state.group;
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
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
              content={'Edit'}
              label={'Group'}
              value={group.full_name} />
            <GroupGrid
              group={group}
              media={this.state.media} />
          </div>
        </div>
      </div>
    );
  }
}

