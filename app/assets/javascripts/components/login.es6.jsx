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
      header: {
        position: 'relative',
        width: '100%',
        textAlign: 'center',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <div style={this.styles.header}>
          <h2>Login</h2>
          <span>This is where you login</span>
        </div>
        <SignupForm />
      </div>
    );
  }
}
