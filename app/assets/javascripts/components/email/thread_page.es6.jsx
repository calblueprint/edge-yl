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
    ThreadActions.createReply(this.state.thread.emails[0], this.state.thread.id);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderEmails() {
    return this.state.thread.emails.map((email) => {
      return (<EmailGrid email={email} />);
    });
  }

  renderReply() {
    if(this.state.thread.emails.length > 0 &&
      this.state.thread.emails[0].sender != this.selectProfile().email) {
      return (
        <FormButton
          action={() => this.sendReply()}
          content={'Reply'} />
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header profile={this.selectProfile()} />
        <Sidebar profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <div style={StyleConstants.pages.content}>
            {this.renderReply()}
            {this.renderEmails()}
          </div>
        </div>
      </div>
    );
  }
}

