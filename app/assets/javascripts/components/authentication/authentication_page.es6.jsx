class AuthenticationPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
  }

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      type: React.PropTypes.oneOf([
        TypeConstants.pages.login,
        TypeConstants.pages.signup,
      ]).isRequired,
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
        alignItems: 'center',
        width: '412px',
        paddingTop: '72px',
      },
      footer: {
        display: 'flex',
        flexFlow: 'column',
        alignSelf: 'stretch',
        paddingTop: '6px',
      },
      label: {
        paddingRight: '4px',
      },
      section: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        paddingTop: '6px',
      },
    };
  }

  // --------------------------------------------------
  // Lifecycle
  // --------------------------------------------------
  componentWillMount() {
    this.setState(AuthenticationStore.getState());
  }

  componentDidMount() {
    AuthenticationStore.listen(this._listener);
  }

  componentWillUnmount() {
    AuthenticationStore.unlisten(this._listener);
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderFooter() {
    var bool = this.props.type === TypeConstants.pages.login;
    var content = bool ? 'Sign up' : 'Log in';
    var label = bool ? 'Don\'t have an account?' : 'Already have an account?';
    var route = bool ? RouteConstants.pages.signup : RouteConstants.pages.login;
    return (
      <div style={this.styles.footer}>
        {this.renderForgot()}
        <div style={this.styles.section}>
          <p style={this.styles.label}>{label}</p>
          <Clickable
            content={content}
            route={route}
            type={'h6'} />
        </div>
      </div>
    );
  }

  renderForgot() {
    if (this.props.type === TypeConstants.pages.login) {
      return (
        <div style={this.styles.section}>
          <p style={this.styles.label}>
            {'Forgot your password?'}
          </p>
          <Clickable
            content={'Reset'}
            route={RouteConstants.pages.forgotPassword}
            type={'h6'} />
        </div>
      );
    }
  }

  render() {
    return (
      <div style={StyleConstants.wrappers.center}>
        <div style={this.styles.container}>
          <AuthenticationCard
            template={this.state.template}
            type={this.props.type} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
