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
        flexFlow: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        flex: '1',
      },
      footer: {
        display: 'flex',
        alignItems: 'flex-end',
        marginTop: '12px',
      },
      label: {
        paddingRight: '4px',
      },
    };
  }

  get clickableStyles() {
    return {
      default: {},
      hover: {
        textDecoration: 'underline',
      },
    };
  }

  renderFooter() {
    var bool = this.props.isLogin;
    var content = bool ? 'Sign up' : 'Log in';
    var label = bool ? 'Don\'t have an account?' : 'Already have an account?';
    var route = bool ? RouteConstants.pages.signup : RouteConstants.pages.login;
    return (
      <div style={this.styles.footer}>
        <h6 style={this.styles.label}>{label}</h6>
        <Clickable
          content={content}
          styles={this.clickableStyles}
          route={route}
          type={'h5'} />
      </div>
    );
  }

  render() {
    return (
      <div style={StyleConstants.pages.default}>
        <Header hasSidebar={false} />
        <div style={this.styles.container}>
          <AuthenticationCard {...this.props} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
