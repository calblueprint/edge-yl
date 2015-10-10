class AuthenticationModal extends Component {

  static get propTypes() {
    return {
      isLogin: React.PropTypes.bool.isRequired,
    };
  }

  static get defaultProps() {
    return {
      isLogin: true,
    };
  }
  
  get styles() {
    return {
      container: {
        position: 'relative',
        width: 372,
        padding: 36,
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

  renderHeader() {
    var title = this.props.isLogin ? 'Login' : 'Signup';
    return (
      <div style={this.styles.head}>
        <h2>{title}</h2>
      </div>
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        {this.renderHeader()}
        {this.renderForm()}
      </div>
    );
  }
}
