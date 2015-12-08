class AuthenticationPage extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      type: React.PropTypes.oneOf(['login', 'signup']).isRequired,
    };
  }

  // --------------------------------------------------
  // Styles
  // --------------------------------------------------
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

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFooter() {
    var bool = this.props.type === 'login';
    var content = bool ? 'Sign up' : 'Log in';
    var label = bool ? 'Don\'t have an account?' : 'Already have an account?';
    var route = bool ? RouteConstants.pages.signup : RouteConstants.pages.login;
    return (
      <div style={this.styles.footer}>
        <h6 style={this.styles.label}>{label}</h6>
        <Clickable
          content={content}
          route={route}
          type={'h5'} />
      </div>
    );
  }

  render() {
    return (
      <div style={StyleConstants.pages.wrapper}>
        <Header active={false} />
        <div style={this.styles.container}>
          <AuthenticationModal type={this.props.type} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
