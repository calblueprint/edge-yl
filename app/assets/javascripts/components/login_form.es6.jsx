class LoginForm extends Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        width: '100%',
      },
      footer: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        height: 32,
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
        <label>Email</label>
        <input
          autoFocus={true}
          placeholder={'email'}
          style={this.styles.input}>
        </input>
        <label>Password</label>
        <input
          placeholder={'password'}
          style={this.styles.input}
          type={'password'}>
        </input>
        <div style={this.styles.footer}>
          <FormButton
            content={'Login'}
            route={'/profile'} />
        </div>
      </div>
    );
  }
}

