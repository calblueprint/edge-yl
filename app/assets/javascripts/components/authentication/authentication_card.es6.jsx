class AuthenticationCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
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
      container: Object.assign(
        {},
        StyleConstants.containers.card,
        {
          alignSelf: 'stretch',
          padding: '24px',
        }
      ),
      header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '12px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderForm() {
    if (this.props.type === TypeConstants.pages.login) {
      return <AuthenticationLogin template={this.props.template} />;
    } else {
      return <AuthenticationSignup template={this.props.template} />;
    }
  }

  renderHeader() {
    var bool = this.props.type === TypeConstants.pages.login;
    return (
      <div style={this.styles.header}>
        <h2>{bool ? 'Log in' : 'Sign up'}</h2>
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
