class Login extends React.Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        width: 356,
        padding: 24,
        margin: '128px auto',
        backgroundColor: 'white',
        border: '1px solid',
        borderColor: '#e5e6e9 #dfe0e4 #d0d1d5',
        borderRadius: 3,
      },
      form: {
        position: 'relative',
        width: '100%',
        textAlign: 'center',
      },
      header: {
        position: 'relative',
        width: '100%',
        paddingBottom: 24,
        textAlign: 'center',
      },
      input: {
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
        <div style={this.styles.header}>
          <span>Login</span>
        </div>
        <div style={this.styles.form}>
          <input
            placeholder='email'
            style={this.styles.input}>
          </input>
          <input
            placeholder='password'
            style={this.styles.input}>
          </input>
        </div>
      </div>
    );
  }
}
