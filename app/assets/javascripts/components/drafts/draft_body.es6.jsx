class DraftBody extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      draft: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
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
  send() {
    DraftActions.sendEmail(this.state.template);
  }


  render() {
    var draft = this.props.draft;
    var template = this.props.template;
    return (
      <div style={this.styles.container}>
        <DraftSubject
          label={'Subject'}
          value={draft.subject} />
        <DraftContent
          label={'Content'}
          value={draft.content} />
        <FormButton
          action={() => this.send()}
          content={'Send'}
          margin={this.props.template.message ? 12 : 24} />
      </div>
    );
  }
}
