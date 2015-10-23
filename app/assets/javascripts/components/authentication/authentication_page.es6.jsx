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
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
        position: 'relative',
      },
      footer: {
        position: 'relative',
        marginTop: '12px',
      },
    };
  }

  renderFooter() {
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
      <div style={StyleConstants.pages.default}>
        <Header />
        <div style={this.styles.container}>
          <AuthenticationCard {...this.props} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
