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
  sendEmail() {
    DraftActions.sendEmail(this.state.template);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var draft = this.props.draft;
    var template = this.props.template;
    return (
      <div style={this.styles.container}>
        <DraftSubject draft={draft} />
        <DraftContent draft={draft} />
        <FormButton
          action={() => this.sendEmail()}
          content={'Send'}
          margin={this.props.template.message ? 12 : 24} />
      </div>
    );
  }
}
