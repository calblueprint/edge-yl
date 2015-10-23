class AuthenticationCard extends Component {

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
      container: Object.assign(
        {},
        StyleConstants.cards.default,
        {
          display: 'flex',
          flexDirection: 'column',
          position: 'relative',
          width: '372px',
          padding: '36px',
        }
      ),
      head: {
        position: 'relative',
        marginBottom: '24px',
        textAlign: 'center',
      },
    };
  }

  renderForm() {
    return this.props.isLogin ? <LoginForm /> : <SignupForm />;
  }

  renderHeader() {
    return (
      <div style={this.styles.head}>
        <h2>{this.props.isLogin ? 'Login' : 'Signup'}</h2>
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
