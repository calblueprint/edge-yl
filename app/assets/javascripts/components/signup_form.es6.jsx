class SignupForm extends React.Component {

  get styles() {
    return {
      container: {
        position: 'relative',
        width: '100%',
        textAlign: 'center',
      },
      input: {
        width: '100%',
        padding: 8,
        marginTop: 24,
        boxSizing: 'border-box',
      },
    };
  }

  render () {
    return (
      <div style={this.styles.container}>
        <input
          placeholder={'email'}
          style={this.styles.input}>
        </input>
        <input
          password={true}
          placeholder={'password'}
          style={this.styles.input}>
        </input>
        <input
          password={true}
          placeholder={'confirmation'}
          style={this.styles.input}>
        </input>
      </div>
    );
  }
}

