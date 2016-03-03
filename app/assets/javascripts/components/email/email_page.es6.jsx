class EmailPage extends Component {

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
    this.setState(EmailStore.getState());
    this.setState(ProfileStore.getState());
  }

  componentDidMount() {
    EmailStore.listen(this._listener);
    ProfileStore.listen(this._listener);
    EmailActions.fetchEmail(this.props.id);
  }

  componentWillUnmount() {
    EmailStore.unlisten(this._listener);
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

  sendReply() {
    EmailActions.createReply(this.state.thread.emails[0], this.state.thread.id);
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

