class ThreadGrid extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      thread: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  sendReply() {
    ThreadActions.createReply(
      this.props.thread.emails[0],
      this.props.thread.id,
    );
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    return (
      <div style={StyleConstants.grids.column}>
        <EmailsCard emails={this.props.thread.emails} />
        <FormButton
          action={() => this.sendReply()}
          content={'Reply'} />
      </div>
    );
  }
}
