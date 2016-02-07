class DraftPage extends Component {

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
    this.setState(DraftStore.getState());
    this.setState(ProfileStore.getState());
  }

  componentDidMount() {
    DraftStore.listen(this._listener);
    ProfileStore.listen(this._listener);
    DraftActions.fetchDraft(this.props.id);
  }

  componentWillUnmount() {
    DraftStore.unlisten(this._listener);
    ProfileStore.unlisten(this._listener);
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
  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <div style={StyleConstants.pages.content}>
            <DraftGrid
              draft={this.state.draft}
              template={this.state.template} />
          </div>
        </div>
      </div>
    );
  }
}

