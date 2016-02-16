class EmailsPage extends Component {

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
      page: React.PropTypes.number.isRequired,
      profile: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(EmailsStore.getState());
    this.setState(ProfileStore.getState());
    this.setState(ViewStore.getState());
  }

  componentDidMount() {
    EmailsStore.listen(this._listener);
    StudentsStore.listen(this._listener);
    ViewStore.listen(this._listener);
    EmailsActions.fetchEmails(this.props.page);
    ViewActions.attachListener();
  }

  componentWillUnmount() {
    EmailsStore.unlisten(this._listener);
    StudentsStore.unlisten(this._listener);
    ViewStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  changePage(page) {
    window.location = RouteConstants.emails.index(page);
  }

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
            <GridHeader label={'Inbox'} />
            <EmailsGrid
              emails={this.state.emails}
              media={this.state.media} />
            <PageNavigator
              action={(page) => this.changePage(page)}
              pagination={this.state.pagination} />
          </div>
        </div>
      </div>
    );
  }
}
