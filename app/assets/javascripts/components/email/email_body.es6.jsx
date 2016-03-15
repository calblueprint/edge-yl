class EmailBody extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          padding: '24px',
          marginTop: '12px',
        },
      ),
    };
  }
  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  showDraft(id) {
    window.location = RouteConstants.drafts.show(id);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderDraftEdit(email) {
    if (email.is_draft) {
      return (
        <FormButton
          action={() => this.showDraft(email.id)}
          content={'Edit'} />
      );
    }
  }

  render() {
    var email = this.props.email;
    var subject = 'Subject';
    if (email.is_draft) {
      subject += ' (Draft)';
    }
    return (
      <div style={this.styles.container}>
        <h6>{subject}</h6>
        <p>{email.subject}</p>
        <h6>{'Content'}</h6>
        <p>{email.content}</p>
        {this.renderDraftEdit(email)}
      </div>
    );
  }
}
