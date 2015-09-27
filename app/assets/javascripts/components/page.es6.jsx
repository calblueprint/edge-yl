class Page extends React.Component {

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
        <Login />
      </div>
    );
  }
}
