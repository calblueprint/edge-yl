class ThreadGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      thread: React.PropTypes.object.isRequired,
      userEmail: React.PropTypes.string.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      footer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  sendReply() {
    ThreadActions.createReply(
      this.props.thread.emails[0],
      this.props.thread.id,
      this.props.userEmail,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderEmail(email) {
    return (
      <EmailsCard
        email={email}
        key={email.id} />
    );
  }

  renderEmails() {
    var thread = this.props.thread;
    return thread.emails.map((email) => this.renderEmail(email));
  }

  render() {
    return (
      <div style={StyleConstants.grids.column}>
        <ThreadCard thread={this.props.thread} />
        {this.renderEmails()}
        <div style={this.styles.footer}>
          <FormButton
            action={() => this.sendReply()}
            content={'Reply'} />
        </div>
      </div>
    );
  }
}
