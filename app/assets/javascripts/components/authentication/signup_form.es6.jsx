class SignupForm extends Component {

  static get defaultState() {
    return {
      email: '',
      birthday: '',
      first_name: '',
      last_name: '', 
      password: '',
      password_confirmation: '',
      errors: false, 
    }
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

  createUser(event) {
    var params = {
      registration: {
        email: this.state.email,
        birthday: this.state.birthday,
        first_name: this.state.first_name,
        last_name: this.state.last_name,
        password: this.state.password,
        password_confirmation: this.state.password_confirmation,
      },
    };
    var resolve = (response) => { console.log('Sign up success'); window.location = RouteConstants.students.index };
    var reject = (response) => { console.log(response); this.setState({errors: true}) };
    Requester.post(RouteConstants.users.create, params, resolve, reject);
  }

  generateHandler(field) {
    var state = {};
    return function(event) {
      state[field] = event.target.value;
      this.setState(state);
    }.bind(this);
  }

  renderMessage() {
    return (
      <span style={this.styles.error}>
        {'Invalid input'}
      </span>
    );
  }
 
  componentDidMount() {
    var email = ReactDOM.findDOMNode(this.refs.email); 
    email.addEventListener('input', this.generateHandler('email'));
    var birthday = ReactDOM.findDOMNode(this.refs.birthday); 
    birthday.addEventListener('input', this.generateHandler('birthday'));
    var firstName = ReactDOM.findDOMNode(this.refs.firstName); 
    firstName.addEventListener('input', this.generateHandler('first_name'));
    var lastName = ReactDOM.findDOMNode(this.refs.lastName); 
    lastName.addEventListener('input', this.generateHandler('last_name'));
    var password = ReactDOM.findDOMNode(this.refs.password); 
    password.addEventListener('input', this.generateHandler('password'));
    var passwordConfirmation = ReactDOM.findDOMNode(this.refs.passwordConfirmation); 
    passwordConfirmation.addEventListener('input', this.generateHandler('password_confirmation')); 
  }

  // TODO: Make Birthday into dropdown 
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
        <label style={this.styles.label}>
          {'Password Confirmation'}
        </label>
        <input
          placeholder={'topsecretpassword'}
          style={this.styles.input}
          ref={'passwordConfirmation'}
          type={'password'}>
        </input>
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
          {'Birthday'}
        </label>
        <input
          placeholder={'01/22/95'}
          ref={'birthday'}
          style={this.styles.input}>
        </input>
        {this.state.errors && this.renderMessage()}
        <FormButton
          content={'Sign up'}
          func={this.createUser.bind(this)} />
      </div>
    );
  }
}

