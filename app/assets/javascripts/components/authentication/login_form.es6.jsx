class LoginForm extends Component {

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
        marginBottom: '24px',
        color: StyleConstants.colors.red,
        textAlign: 'center',
      },
      input: {
        flex: 1,
        padding: '8px',
        marginBottom: '24px',
      },
      label: {
        flex: 1,
        marginBottom: '6px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var email = ReactDOM.findDOMNode(this.refs.email);
    email.addEventListener('input', this.generateHandler('email'));
    var password = ReactDOM.findDOMNode(this.refs.password);
    password.addEventListener('input', this.generateHandler('password'));
  }

  // --------------------------------------------------
  // Helpers
  // --------------------------------------------------
  createSession(event) {
    var params = {
      user: {
        email: this.state.email,
        password: this.state.password,
      },
    };
    var resolve = (response) => { window.location = RouteConstants.students.index };
    var reject = (response) => { this.setState({ error: response.message }) };
    Requester.post(ApiConstants.users.login, params, resolve, reject);
  }

  generateHandler(field) {
    var state = {};
    return (event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
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
    return (
      <div style={this.styles.container}>
        <label style={this.styles.label}>
          {'Email'}
        </label>
        <input
          autoFocus={true}
          placeholder={'example@email.com'}
          ref={'email'}
          style={this.styles.input}>
        </input>
        <label style={this.styles.label}>
          {'Password'}
        </label>
        <input
          placeholder={'topsecretpassword'}
          ref={'password'}
          style={this.styles.input}
          type={'password'}>
        </input>
        {this.renderError()}
        <FormButton
          action={(event) => this.createSession(event)}
          content={'Log in'} />
      </div>
    );
  }
}
