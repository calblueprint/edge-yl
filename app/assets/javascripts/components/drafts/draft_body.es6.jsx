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
    ComposeActions.sendEmail(this.state.template);
  }

  saveDraft(field) {
    return(event) => {
      ComposeActions.saveDraft(event.target.value);
    };
  }

  render() {
    var draft = this.props.draft;
    var template = this.props.template;
    return (
      <div style={this.styles.container}>
        <CardInput
          action={this.saveDraft()}
          label={'Subject'}
          placeholder={'Subject'}
          type={'text'}
          value={draft.subject} />
        <CardInput
          action={this.saveDraft()}
          label={'Content'}
          placeholder={'Content'}
          type={'textarea'}
          value={draft.content} />
        <FormButton
          action={() => this.send()}
          content={'Send'}
          margin={this.props.template.message ? 12 : 24} />
      </div>
    );
  }
}
