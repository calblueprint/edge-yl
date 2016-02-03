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
  renderSave() {
    if(this.props.template.saved) {
      return (
        <span>{this.props.template.saved}</span>
      );
    }
  }

  send() {
    DraftActions.sendEmail(this.state.template);
  }


  render() {
    var draft = this.props.draft;
    var template = this.props.template;
    return (
      <div style={this.styles.container}>
        <DraftSubject
          id={draft.id}
          label={'Subject'}
          value={draft.subject} />
        <DraftContent
          id={draft.id}
          label={'Content'}
          value={draft.content} />
        {this.renderSave()}
        <FormButton
          action={() => this.send()}
          content={'Send'}
          margin={this.props.template.message ? 12 : 24} />
      </div>
    );
  }
}
