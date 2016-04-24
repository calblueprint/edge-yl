class ForgotPasswordForm extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
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
        flex: '1',
        marginTop: '12px',
        color: StyleConstants.colors.red,
        textAlign: 'center',
      },
      footer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: this.props.template.message ? '12px' : '24px',
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
  // Handlers
  // --------------------------------------------------
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.sendResetEmail();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    return(event) => {
      AuthenticationActions.storeAttribute(field, event.target.value);
    };
  }

  sendResetEmail() {
    AuthenticationActions.sendResetEmail(this.props.template);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    var errors = template.errors;
    return (
      <div ref={'container'} style={this.styles.container}>
        <CardInput
          action={this.generateHandler('email')}
          errors={errors.email}
          focus={true}
          label={'Email'}
          type={'email'}
          value={template.attributes.email} />
        <div style={this.styles.footer}>
          <FormButton
            action={() => this.sendResetEmail()}
            content={'Send Reset Email'} />
        </div>
      </div>
    );
  }
}
