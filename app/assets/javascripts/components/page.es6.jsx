class Page extends React.Component {

  static get propTypes() {
    return {
      isLogin: React.PropTypes.bool.isRequired,
    }
  }

  get styles() {
    return {
      container: {
        position: 'relative',
        width: '100%',
        height: '100%',
      },
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header />
        <Login isLogin={this.props.isLogin} />
      </div>
    );
  }
}
