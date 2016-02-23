class FeedbackCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      profile: React.PropTypes.object.isRequired,
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
          marginTop: '24px',
        }
      ),
      footer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '12px',
      },
      header: {
        display: 'flex',
        justifyContent: 'center',
      },
    };
  }

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.createFeedback();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createFeedback() {
    FeedbackActions.createFeedback(
      this.props.template,
      { user_id: this.props.profile.id },
    );
  }

  storeAttribute(event) {
    FeedbackActions.storeAttribute('content', event.target.value);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    return (
      <div ref={'container'} style={this.styles.container}>
        <div style={this.styles.header}>
          <h2>{'Feedback'}</h2>
        </div>
        <CardTextarea
          action={(event) => this.storeAttribute(event)}
          errors={template.errors.content}
          focus={true}
          label={'Message'}
          placeholder={'Your feedback here'}
          type={'text'}
          value={template.content} />
        <div style={this.styles.footer}>
          <FormButton
            action={() => this.createFeedback()}
            content={'Submit'} />
        </div>
      </div>
    );
  }
}
