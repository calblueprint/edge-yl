class LoginForm extends Component {

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
    if (this.state.error) {
      return (
        <span style={this.styles.error}>
          {this.state.error}
        </span>
      );
    }
  }

  render() {
    var styles = this.props.styles;
    var template = this.props.template;
    return (
      <div ref={'container'} style={styles.container}>
        <label style={styles.label}>
          {'Email'}
        </label>
        <CardInput
          action={this.generateHandler('email')}
          errors={template.errors.email}
          focus={true}
          margin={false}
          placeholder={'admin@edgeyl.com'}
          value={template.email} />
        <label style={styles.label}>
          {'Password'}
        </label>
        <CardInput
          action={this.generateHandler('password')}
          errors={template.errors.password}
          placeholder={'password'}
          value={template.password} />
        {this.renderError()}
        <FormButton
          action={() => this.createSession()}
          content={'Log in'} />
      </div>
    );
  }
}
