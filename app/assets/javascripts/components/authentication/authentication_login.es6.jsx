class AuthenticationLogin extends Component {

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
      this.createSession();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createSession() {
    AuthenticationActions.createSession(this.props.template);
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      AuthenticationActions.storeAttribute(field, event.target.value);
    };
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
    var template = this.props.template;
    return (
      <div ref={'container'} style={this.styles.container}>
        <CardInput
          action={this.generateHandler('email')}
          focus={true}
          label={'Email'}
          placeholder={'admin@edgeyl.org'}
          type={'email'}
          value={template.email} />
        <CardInput
          action={this.generateHandler('password')}
          label={'Password'}
          margin={true}
          placeholder={'password'}
          type={'password'}
          value={template.password} />
        {this.renderError()}
        <div style={this.styles.footer}>
          <FormButton
            action={() => this.createSession()}
            content={'Log in'} />
        </div>
      </div>
    );
  }
}
