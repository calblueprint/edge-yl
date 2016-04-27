class ResetPasswordForm extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
      token: React.PropTypes.string.isRequired,
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
      footer: {
        display: 'flex',
        justifyContent: 'center',
        marginTop: '24px',
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
      this.resetPassword();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  generateHandler(field) {
    var state = {};
    return(event) => {
      AuthenticationActions.storeAttribute(field, event.target.value);
    };
  }

  resetPassword() {
    var template = this.props.template;
    template.attributes['reset_password_token'] = this.props.token;
    AuthenticationActions.resetPassword(template);
  }


  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var template = this.props.template;
    return (
      <div ref={'container'} style={this.styles.container}>
        <CardInput
          action={this.generateHandler('password')}
          errors={template.errors.password}
          label={'New password'}
          margin={true}
          type={'password'}
          value={template.password} />
        <CardInput
          action={this.generateHandler('password_confirmation')}
          errors={template.errors.password_confirmation}
          label={'Password confirmation'}
          margin={true}
          type={'password'}
          value={template.password_confirmation} />
        <div style={this.styles.footer}>
          <FormButton
            action={() => this.resetPassword()}
            content={'Reset password'} />
        </div>
      </div>
    );
  }
}

