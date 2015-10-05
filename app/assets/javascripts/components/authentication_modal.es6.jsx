class AuthenticationModal extends React.Component {

  static get propTypes() {
    return {
      isLogin: React.PropTypes.bool.isRequired,
    };
  }
  
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
      head: {
        position: 'relative',
        width: '100%',
        marginBottom: 24,
        textAlign: 'center',
      },
    };
  }

  renderForm() {
    if (this.props.isLogin) {
      return <LoginForm />;
    } else {
      return <SignupForm />;
    }
  }

  render() {
    var title = this.props.isLogin ? 'Login' : 'Signup';
    return (
      <div style={this.styles.container}>
        <div style={this.styles.head}>
          <h2>{title}</h2>
        </div>
        {this.renderForm()}
      </div>
    );
  }
}
