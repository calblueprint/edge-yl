class ProspectPage extends Component {

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
    this.setState(ProspectStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    ProspectStore.listen(this._listener);
    ViewStore.listen(this._listener);
    ProspectActions.fetchProspect(this.props.id);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    ProspectStore.unlisten(this._listener);
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
        <ProspectPageOverlay
          pairing={this.state.pairing}
          profile={this.selectProfile()}
          prospect={this.state.prospect}
          template={this.state.template} />
      );
    }
  }

  render() {
    var prospect = this.state.prospect;
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
            title={`Prospect School: ${prospect.name}`} />
          <ProspectGrid
            editable={this.state.editable}
            media={this.state.media}
            prospect={prospect} />
          <PageComments
            profile={this.selectProfile()}
            prospect={this.state.prospect}
            type={TypeConstants.comments.prospect} />
          </div>
        </div>
      </div>
    );
  }
}
