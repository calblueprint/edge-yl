class ProfilePage extends Component {
  
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
        flex: 1,
        position: 'relative',
        width: '100%',
      },
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

