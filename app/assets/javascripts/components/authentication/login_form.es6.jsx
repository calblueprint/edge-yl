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
    };
  }

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      email: '',
      error: '',
      password: '',
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.addEventListener('keydown', (event) => this.handleKeyDown(event));
    var email = ReactDOM.findDOMNode(this.refs.email);
    email.addEventListener('input', this.generateHandler('email'));
    var password = ReactDOM.findDOMNode(this.refs.password);
    password.addEventListener('input', this.generateHandler('password'));
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createSession() {
    var params = {
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    };
    var resolve = (response) => window.location = RouteConstants.students.index();
    var reject = (response) => this.setState({ error: response.message });
    Requester.post(
      ApiConstants.users.login,
      params,
      resolve,
      reject
    );
  }

  generateHandler(field) {
    var state = {};
    return (event) => {
      state[field] = event.target.value;
      this.setState(state);
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
    return (
      <div ref={'container'} style={styles.container}>
        <label style={styles.label}>
          {'Email'}
        </label>
        <input
          autoFocus={true}
          placeholder={'example@email.com'}
          ref={'email'}
          style={styles.input}>
        </input>
        <label style={styles.label}>
          {'Password'}
        </label>
        <input
          placeholder={'topsecretpassword'}
          ref={'password'}
          style={styles.input}
          type={'password'}>
        </input>
        {this.renderError()}
        <FormButton
          action={() => this.createSession()}
          content={'Log in'} />
      </div>
    );
  }
}
