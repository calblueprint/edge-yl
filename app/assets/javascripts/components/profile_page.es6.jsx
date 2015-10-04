class ProfilePage extends React.Component {
  
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
        <Sidebar />
      </div>
    );
  }
}

