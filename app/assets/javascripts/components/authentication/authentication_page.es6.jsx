class AuthenticationPage extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      type: React.PropTypes.oneOf(['login', 'signup']).isRequired,
    };
  }

  static get defaultProps() {
    return {
      type: 'login',
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

  get clickableStyles() {
    return {
      hover: {
        textDecoration: 'underline',
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
          <AuthenticationModal {...this.props} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
