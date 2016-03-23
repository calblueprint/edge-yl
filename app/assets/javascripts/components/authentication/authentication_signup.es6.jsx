class AuthenticationSignup extends Component {

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
      this.createUser();
    }
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createUser() {
    AuthenticationActions.createUser(this.props.template);
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
  render() {
    var template = this.props.template;
    return (
      <div ref={'container'} style={this.styles.container}>
        <CardInput
          action={this.generateHandler('first_name')}
          errors={template.errors.first_name}
          focus={true}
          label={'First name'}
          value={template.first_name} />
        <CardInput
          action={this.generateHandler('last_name')}
          errors={template.errors.last_name}
          label={'Last name'}
          margin={true}
          value={template.last_name} />
        <CardInput
          action={this.generateHandler('email')}
          errors={template.errors.email}
          label={'Email'}
          margin={true}
          type={'email'}
          value={template.email} />
        <CardInput
          action={this.generateHandler('password')}
          errors={template.errors.password}
          label={'Password'}
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
            action={() => this.createUser()}
            content={'Sign up'} />
        </div>
      </div>
    );
  }
}

