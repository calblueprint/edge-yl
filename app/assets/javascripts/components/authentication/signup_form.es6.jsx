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
    };
  }


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

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentDidMount() {
    var container = ReactDOM.findDOMNode(this.refs.container);
    container.addEventListener('keydown', (event) => this.handleKeyDown(event));
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
  // Helpers
  // --------------------------------------------------
  createUser() {
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
    var resolve = (response) => window.location = RouteConstants.students.index();
    var reject = (response) => this.setState({error: response.message});
    Requester.post(
      ApiConstants.users.create,
      params,
      resolve,
      reject
    );
  }

  generateHandler(field) {
    var state = {};
    return(event) => {
      state[field] = event.target.value;
      this.setState(state);
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
          {'First name'}
        </label>
        <input
          autoFocus={true}
          placeholder={'Emily'}
          ref={'firstName'}
          style={styles.input}>
        </input>
        <label style={styles.label}>
          {'Last name'}
        </label>
        <input
          placeholder={'Wilson'}
          ref={'lastName'}
          style={styles.input}>
        </input>
        <label style={styles.label}>
          {'Email'}
        </label>
        <input
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
        <label style={styles.label}>
          {'Password confirmation'}
        </label>
        <input
          placeholder={'topsecretpassword'}
          ref={'passwordConfirmation'}
          style={styles.input}
          type={'password'}>
        </input>
        {this.renderError()}
        <FormButton
          action={() => this.createUser()}
          content={'Sign up'} />
      </div>
    );
  }
}

