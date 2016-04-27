class ForgotPasswordPage extends Component {

  // --------------------------------------------------
  // Setup
  // --------------------------------------------------
  constructor(props) {
    super(props);
    this._listener = (state) => this.setState(state);
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
        justifyContent: 'center',
        alignItems: 'flex-end',
        alignSelf: 'stretch',
        margin: '12px 0px',
      },
      label: {
        paddingRight: '4px',
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
    return (
      <div style={this.styles.footer}>
        <Clickable
          content={'Log in'}
          route={RouteConstants.pages.login}
          type={'h6'} />
      </div>
    );
  }

  render() {
    return (
      <div style={StyleConstants.wrappers.center}>
        <div style={this.styles.container}>
          <ForgotPasswordCard
            template={this.state.template} />
          {this.renderFooter()}
        </div>
      </div>
    );
  }
}
