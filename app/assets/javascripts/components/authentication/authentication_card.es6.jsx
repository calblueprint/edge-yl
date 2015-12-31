class AuthenticationCard extends Component {

  // --------------------------------------------------
  // Props
  // --------------------------------------------------
  static get propTypes() {
    return {
      template: React.PropTypes.object.isRequired,
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
        StyleConstants.containers.card,
        {
          width: '472px',
          padding: '24px',
          margin: '0px',
        }
      ),
      header: {
        display: 'flex',
        justifyContent: 'center',
        marginBottom: '16px',
      },
    };
  }

  get childStyles() {
    return {
      container: {
        display: 'flex',
        flexFlow: 'column',
      },
      error: {
        flex: 1,
        marginBottom: '16px',
        color: StyleConstants.colors.red,
        textAlign: 'center',
      },
      input: {
        flex: 1,
        padding: '8px',
        marginBottom: '16px',
      },
      label: {
        flex: 1,
        marginBottom: '6px',
      },
    };
  }

  // --------------------------------------------------
  // Render
  // --------------------------------------------------
  renderForm() {
    if (this.props.type === 'login') {
      return (
        <LoginForm
          styles={this.childStyles}
          template={this.props.template} />
      );
    } else {
      return (
        <SignupForm
          styles={this.childStyles}
          template={this.props.template} />
      );
    }
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
