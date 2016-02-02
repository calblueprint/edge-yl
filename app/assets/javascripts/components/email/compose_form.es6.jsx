class ComposeForm extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      email: React.PropTypes.object.isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
      },
      error: {
        flex: 1,
        marginTop: '12px',
        color: StyleConstants.colors.red,
        textAlign: 'center',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.onkeydown = (event) => this.handleKeyDown(event);
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

  // --------------------------------------------------
  // Handlers
  // --------------------------------------------------
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.createSession();
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderError() {
    var template = this.props.template;
    if (template.message) {
      return (
        <h6 style={this.styles.error}>
          {template.message}
        </h6>
      );
    }
  }

  render() {
    var email = this.props.email;
    var template = this.props.template;
    console.log(template);
    return (
      <div ref={'container'} style={this.styles.container}>
        <CardInput
          // errors={template.errors.recipient}
          focus={true}
          label={'recipient'}
          placeholder={'To'}
          type={'text'}
          value={email.recipient} />
        <CardInput
          action={this.saveDraft()}
          // errors={template.errors.subject}
          focus={true}
          label={'subject'}
          placeholder={'Subject'}
          type={'text'}
          value={email.subject} />
        <CardInput
          action={this.saveDraft()}
          // errors={template.errors.content}
          focus={true}
          label={'content'}
          placeholder={'Content'}
          type={'textarea'}
          value={email.content} />
        {this.renderError()}
        <FormButton
          action={() => this.send()}
          content={'Send'}
          margin={this.props.template.message ? 12 : 24} />
      </div>
    );
  }
}
