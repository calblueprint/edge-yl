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
        email: 'warrenshen@berkeley.edu',
        birthday: '2015-1-1',
        first_name: 'Warren',
        last_name: 'Shen',
        password: 'password',
        password_confirmation: 'password',
      },
    };
    var resolve = (response) => { console.log('Sign up success'); window.location = RouteConstants.students.index };
    var reject = (response) => { console.log(response) };
    Requester.post(RouteConstants.users.create, params, resolve, reject);
  }

  componentDidMount() {
    var email = ReactDOM.findDOMNode(this.refs.email); 
    email.addEventListener('input', this.generateHandler('email'));
    var birthday = ReactDOM.findDOMNode(this.refs.email); 
    birthday.addEventListener('input', this.generateHandler('birthday'));
    var firstName = ReactDOM.findDOMNode(this.refs.email); 
    firstName.addEventListener('input', this.generateHandler('first_name'));
    var lastName = ReactDOM.findDOMNode(this.refs.email); 
    lastName.addEventListener('input', this.generateHandler('last_name'));
    var password = ReactDOM.findDOMNode(this.refs.email); 
    password.addEventListener('input', this.generateHandler('password'));
    var passwordConfirmation = ReactDOM.findDOMNode(this.refs.email); 
    passwordConfirmation.addEventListener('input', this.generateHandler('password_confirmation')); 
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
          style={this.styles.input}>
        </input>
        <label style={this.styles.label}>
          {'Password'}
        </label>
        <input
          placeholder={'topsecretpassword'}
          style={this.styles.input}
          type={'password'}>
        </input>
        <label style={this.styles.label}>
          {'Password Confirmation'}
        </label>
        <input
          placeholder={'topsecretpassword'}
          style={this.styles.input}
          type={'password'}>
        </input>
        <FormButton
          content={'Sign up'}
          func={this.createUser.bind(this)} />
      </div>
    );
  }
}

