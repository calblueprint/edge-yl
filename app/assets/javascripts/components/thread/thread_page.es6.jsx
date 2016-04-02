class ThreadPage extends Component {

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
    this.setState(ThreadStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    ThreadStore.listen(this._listener);
    ThreadActions.fetchThread(this.props.id);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    ThreadStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  selectProfile() {
    return this.state.profile ?
           this.state.profile :
           this.props.profile;
  }

  sendReply() {
    ThreadActions.createReply(
      this.state.thread.emails[0],
      this.state.thread.id,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <div style={StyleConstants.pages.default}>
          <div style={StyleConstants.pages.content}>
            <ThreadGrid thread={this.state.thread} />
            <FormButton
              action={() => this.sendReply()}
              content={'Reply'} />
          </div>
        </div>
      </div>
    );
  }
}
