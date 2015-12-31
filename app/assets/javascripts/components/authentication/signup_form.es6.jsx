class SignupForm extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      styles: React.PropTypes.shape({
        container: React.PropTypes.object,
        error: React.PropTypes.object,
        label: React.PropTypes.object,
        input: React.PropTypes.object,
      }).isRequired,
      template: React.PropTypes.object.isRequired,
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.addEventListener('keydown', (event) => this.handleKeyDown(event));
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
  // Handlers
  // --------------------------------------------------
  handleKeyDown(event) {
    if (event.keyCode === 13) {
      this.createUser();
    }
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  render() {
    var styles = this.props.styles;
    var template = this.props.template;
    return (
      <div ref={'container'} style={styles.container}>
        <label style={styles.label}>
          {'First name'}
        </label>
        <CardInput
          action={this.generateHandler('first_name')}
          errors={template.errors.first_name}
          focus={true}
          placeholder={'Kira'}
          value={template.first_name} />
        <label style={styles.label}>
          {'Last name'}
        </label>
        <CardInput
          action={this.generateHandler('last_name')}
          errors={template.errors.last_name}
          focus={true}
          placeholder={'Klapper'}
          value={template.last_name} />
        <label style={styles.label}>
          {'Email'}
        </label>
        <CardInput
          action={this.generateHandler('email')}
          errors={template.errors.email}
          focus={true}
          placeholder={'volunteer@edgeyl.com'}
          value={template.email} />
        <label style={styles.label}>
          {'Password'}
        </label>
        <CardInput
          action={this.generateHandler('password')}
          errors={template.errors.password}
          placeholder={'password'}
          value={template.password} />
        <label style={styles.label}>
          {'Password confirmation'}
        </label>
        <CardInput
          action={this.generateHandler('password_confirmation')}
          errors={template.errors.password_confirmation}
          placeholder={'password'}
          value={template.password_confirmation} />
        <FormButton
          action={() => this.createUser()}
          content={'Sign up'} />
      </div>
    );
  }
}

