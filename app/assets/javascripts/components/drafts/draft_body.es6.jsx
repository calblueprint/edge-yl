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
    DraftActions.sendEmail(this.props.template);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var draft = this.props.draft;
    var template = this.props.template;
    return (
      <div style={this.styles.container}>
        <DraftSubject
          draft={draft}
          template={template} />
        <DraftContent
          draft={draft}
          template={template} />
        <FormButton
          action={() => this.sendEmail()}
          content={'Send'}
          margin={12} />
      </div>
    );
  }
}
