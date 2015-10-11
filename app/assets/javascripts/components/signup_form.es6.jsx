class SignupForm extends Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        width: '100%',
        textAlign: 'center',
      },
      input: {
        position: 'relative',
        width: '100%',
        padding: 8,
        marginBottom: 24,
        boxSizing: 'border-box',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <input
          autoFocus={true}
          placeholder={'email'}
          style={this.styles.input}>
        </input>
        <input
          placeholder={'password'}
          style={this.styles.input}
          type={'password'}>
        </input>
        <input
          placeholder={'confirmation'}
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

