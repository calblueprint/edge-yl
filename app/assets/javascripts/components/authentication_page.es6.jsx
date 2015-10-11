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
        position: 'relative',
        width: '100vw',
        height: '100vh',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header />
        <AuthenticationModal isLogin={this.props.isLogin} />
      </div>
    );
  }
}
