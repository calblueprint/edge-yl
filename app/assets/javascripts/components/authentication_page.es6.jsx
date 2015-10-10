class AuthenticationPage extends Component {

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
      container: {
        display: 'flex',
        flexDirection: 'column',
        position: 'relative',
        width: '100vw',
        height: '100vh',
      },
      body: {
        display: 'flex',
        flex: '1',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header />
        <div style={this.styles.body}>
          <AuthenticationModal
            isLogin={this.props.isLogin} />
        </div>
      </div>
    );
  }
}
