class LoginForm extends Component {

  static get defaultState() {
    return {
      email: '',
      password: '',
    };
  }

  get styles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
      },
      label: {
        marginBottom: '6px',
      },
      input: {
        padding: '8px',
        marginBottom: '24px',
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
    var reject = (response) => { this.setState({ errors: true }) };
    Requester.post(RouteConstants.users.login, params, resolve, reject);
  }

  generateHandler(field) {
    var state = {};
    return function(event) {
      state[field] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  componentDidMount() {
    var email = ReactDOM.findDOMNode(this.refs.email);
    email.addEventListener('input', this.generateHandler('email'));
    var password = ReactDOM.findDOMNode(this.refs.password);
    password.addEventListener('input', this.generateHandler('password'));
  }

  render() {
    console.log(this.state.errors);
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
        <FormButton
          content={'Log in'}
          func={this.createSession.bind(this)} />
      </div>
    );
  }
}
