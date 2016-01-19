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
      id: React.PropTypes.number.isRequired,
      profile: React.PropTypes.object.isRequired,
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
    GroupActions.fetchGroup(this.props.id)
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    GroupStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  selectProfile() {
    return this.state.profile ?
           this.state.profile :
           this.props.profile;
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  generateOptions() {
    return [
      {
        action: () => ViewActions.toggleEditability(),
        content: this.state.editable ? 'Finish' : 'Edit',
      },
      {
        route: ApiConstants.csvs.groups,
        content: 'Export',
      },
    ];
  }


  renderOverlay() {
    if (this.state.overlay) {
      return (
        <GroupPageOverlay
          groupables={this.state.groupables}
          template={this.state.template} />
      );
    }
  }

  render() {
    var group = this.state.group;
    return (
      <div style={StyleConstants.pages.wrapper}>
        {this.renderOverlay()}
        <Header profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <Sidebar profile={this.selectProfile()} />
          <div style={StyleConstants.pages.content}>
            <GridHeader
              label={'Group'}
              options={this.generateOptions()}
              value={group.full_name} />
            <GroupGrid
              editable={this.state.editable}
              group={group}
              media={this.state.media} />
          </div>
        </div>
      </div>
    );
  }
}

