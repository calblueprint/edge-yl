class AuthenticationModal extends Component {

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
      container: Object.assign(
        {},
        StyleConstants.defaults.card,
        {
          width: '372px',
          padding: '36px',
        }
      ),
      header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '24px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderForm() {
    return this.props.type === 'login' ? <LoginForm /> : <SignupForm />;
  }

  renderHeader() {
    return (
      <div style={this.styles.header}>
        <h2>{this.props.type === 'login' ? 'Login' : 'Signup'}</h2>
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
