class ProfilePage extends React.Component {
  
  get styles() {
    return {
      container: {
        position: 'relative',
        width: '100vw',
        height: '100vh',
      },
      body: {
        position: 'relative',
        width: '100%',
        height: '100%',
        paddingTop: 48,
      }
    };
  }

  render() {
    return (
      <div style={this.styles.container}>
        <Header />
        <div style={this.styles.body}>
          <Sidebar />
          <ProfileGrid />
        </div>
      </div>
    );
  }
}

