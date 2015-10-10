class SignupForm extends Component {

  get styles() {
    return {
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
      },
      label: {
        position: 'relative',
        marginBottom: 6,
      },
      input: {
        position: 'relative',
        padding: 8,
        marginBottom: 24,
        boxSizing: 'border-box',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <label style={this.styles.label}>
          Email
        </label>
        <input
          autoFocus={true}
          placeholder={'example@email.com'}
          style={this.styles.input}>
        </input>
        <label style={this.styles.label}>
          Password
        </label>
        <input
          placeholder={'topsecretpassword'}
          style={this.styles.input}
          type={'password'}>
        </input>
        <label style={this.styles.label}>
          Password Confirmation
        </label>
        <input
          placeholder={'topsecretpassword'}
          style={this.styles.input}
          type={'password'}>
        </input>
        <FormButton
          content={'Signup'}
          route={'/profile'} />
      </div>
    );
  }
}

