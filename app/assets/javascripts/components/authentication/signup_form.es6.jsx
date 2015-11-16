class SignupForm extends Component {

  // --------------------------------------------------
  // State
  // --------------------------------------------------
  static get defaultState() {
    return {
      email: '',
      error: '',
      firstName: '',
      lastName: '',
      password: '',
      passwordConfirmation: '',
    };
  }

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
  // Helpers
  // --------------------------------------------------
  createUser(event) {
    var params = {
      registration: {
        email: this.state.email,
        birthday: this.state.birthday,
        first_name: this.state.firstName,
        last_name: this.state.lastName,
        password: this.state.password,
        password_confirmation: this.state.passwordConfirmation,
      },
    };
    var resolve = (response) => { window.location = RouteConstants.students.index };
    var reject = (response) => { this.setState({error: response.message}) };
    Requester.post(ApiConstants.users.create, params, resolve, reject);
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var firstName = ReactDOM.findDOMNode(this.refs.firstName);
    firstName.addEventListener('input', this.generateHandler('firstName'));
    var lastName = ReactDOM.findDOMNode(this.refs.lastName);
    lastName.addEventListener('input', this.generateHandler('lastName'));
    var email = ReactDOM.findDOMNode(this.refs.email);
    email.addEventListener('input', this.generateHandler('email'));
    var password = ReactDOM.findDOMNode(this.refs.password);
    password.addEventListener('input', this.generateHandler('password'));
    var passwordConfirmation = ReactDOM.findDOMNode(this.refs.passwordConfirmation);
    passwordConfirmation.addEventListener('input', this.generateHandler('passwordConfirmation'));
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
          {'First Name'}
        </label>
        <input
          placeholder={'Emily'}
          ref={'firstName'}
          style={this.styles.input}>
        </input>
        <label style={this.styles.label}>
          {'Last Name'}
        </label>
        <input
          placeholder={'Wilson'}
          ref={'lastName'}
          style={this.styles.input}>
        </input>
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
        <label style={this.styles.label}>
          {'Password Confirmation'}
        </label>
        <input
          placeholder={'topsecretpassword'}
          ref={'passwordConfirmation'}
          style={this.styles.input}
          type={'password'}>
        </input>
        {this.renderError()}
        <FormButton
          content={'Sign up'}
          func={(event) => this.createUser(event)} />
      </div>
    );
  }
}

