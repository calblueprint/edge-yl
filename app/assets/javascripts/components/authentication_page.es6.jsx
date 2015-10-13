class AuthenticationPage extends Component {

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
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        height: '100vh',
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
        alignItems: 'center',
        position: 'relative',
      },
      footer: {
        position: 'relative',
        marginTop: '12px',
      },
    };
  }

  renderToggle() {
    var bool = this.props.isLogin;
    var content = bool ? 'Sign up' : 'Log in';
    var label = bool ? 'Don\'t have an account?' : 'Already have an account?';
    var href = bool ? '/signup' : 'login';
    return (
      <div style={this.styles.footer}>
        <span>{label + ' '}</span>
        <a href={href}><u>{content}</u></a>
      </div>
    );
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header />
        <div style={this.styles.body}>
          <AuthenticationModal {...this.props} />
          {this.renderToggle()}
        </div>
      </div>
    );
  }
}
