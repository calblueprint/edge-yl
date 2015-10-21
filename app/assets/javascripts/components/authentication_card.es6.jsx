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
        {
          position: 'relative',
          width: '372px',
          padding: '36px',
        },
        StyleConstants.cards.default
      ),
      head: {
        position: 'relative',
        width: '100%',
        marginBottom: '24px',
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
