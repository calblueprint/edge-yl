class LoginForm extends Component {

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
        <FormButton
          content={'Log in'}
          route={RouteConstants.students.index} />
      </div>
    );
  }
}
