class LoginForm extends Component {

  static get defaultState() {
    return {
      email: '',
      error: '',
      password: '',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      },
      error: {
        marginBottom: '24px',
        color: StyleConstants.colors.red,
      },
      label: {
        marginBottom: '6px',
        alignSelf: 'stretch',
      },
      input: {
        padding: '8px',
        marginBottom: '24px',
        alignSelf: 'stretch',
      },
    };
  }

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

  componentDidMount() {
    var email = ReactDOM.findDOMNode(this.refs.email);
    email.addEventListener('input', this.generateHandler('email'));
    var password = ReactDOM.findDOMNode(this.refs.password);
    password.addEventListener('input', this.generateHandler('password'));
  }

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
          style={this.styles.input}
          ref={'password'}
          type={'password'}>
        </input>
        {this.renderError()}
        <FormButton
          content={'Log in'}
          func={this.createSession.bind(this)} />
      </div>
    );
  }
}
