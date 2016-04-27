class ResetPasswordPage extends Component {

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
      token: React.PropTypes.string.isRequired,
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

  render() {
    return (
      <div style={StyleConstants.wrappers.center}>
        <div style={this.styles.container}>
          <ResetPasswordCard
            template={this.state.template}
            token={this.props.token} />
        </div>
      </div>
    );
  }
}
