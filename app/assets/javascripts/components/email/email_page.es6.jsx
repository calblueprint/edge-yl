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
    this.setState(ProfileStore.getState());
    this.setState(EmailStore.getState());
  }

  componentDidMount() {
    ProfileStore.listen(this._listener);
    EmailStore.listen(this._listener);
    EmailActions.fetchEmail(this.props.id);
  }

  componentWillUnmount() {
    ProfileStore.unlisten(this._listener);
    EmailStore.unlisten(this._listener);
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
    var email = this.state.email;
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header profile={this.selectProfile()} />
        <div style={StyleConstants.pages.container}>
          <Sidebar profile={this.selectProfile()} />
          <div style={StyleConstants.pages.content}>
            <h2>{email.subject}</h2>
            <h3>{email.from}</h3>
            <p>{email.content}</p>
          </div>
        </div>
      </div>
    );
  }
}

